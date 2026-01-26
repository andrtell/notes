# Binary Input

__Sample data__

```
$ printf '\x00\x01\x02\x03' > data.bin

$ xxd data.bin
00000000: 0001 0203                                ....

$ head -c 16 /dev/urandom > random.bin

$ xxd random.bin
00000000: 7ddd ff2c 610c 0357 f061 3d41 d1fe 348c  }..,a..W.a=A..4.
```

## Basic operations

__File system__

`file-exists?`

```scheme
(file-exists? "data.bin") => ; #t
```

__Open port__

`open-file-input-port`

```scheme
(open-file-input-port "data.bin") ; => #<binary input port data.bin>

; defaults to
(open-file-input-port "data.bin" (file-options) (buffer-mode block) #f) ; =>  #<binary input port data.bin>
```

__Close port__

`close-port`

```scheme
(let ([port (open-file-input-port "data.bin")])
  (close-port port)) ; => <undefined>
```

`dynamic-wind`

```scheme
; make sure input port is closed after processing, regardless of whether the processing completes normally. 

(let ([port (open-file-input-port "data.bin")])
  (dynamic-wind
    (lambda () #f)                   ; in
    (lambda () (process port))       ; body
    (lambda () (close-port port))))  ; out
```

`call-with-port`

```scheme
(call-with-port (open-file-input-port "data.bin")
                (lambda (port)
                  (get-u8 port))) ;; => 0
```

```scheme
; an implementation of call-with-port

(define call-with-port
  (lambda (port proc)
    (call-with-values (lambda () (proc port))
      (case-lambda
        [(val) (close-port port)
               val]
        [val* (close-port port)
              (apply values val*)]))))
```

__Port info__

`port?`, `file-port?` and `binary-port?`

```scheme
(let ([port (open-file-input-port "data.bin")])
  (list (port? port)
        (file-port? port)
        (binary-port? port))) ; => (#t #t #t)
```

`port-file-descriptor`

```scheme
(let ([port (open-file-input-port "data.bin")])
  (port-file-descriptor port)) ; => 7 (some integer)
```

__Read data__

`get-u8`

```scheme
(let* ([port (open-file-input-port "data.bin")]
       [b0 (get-u8 port)])
  (list b0)) ; => (0)
```

```scheme
(let* ([port (open-file-input-port "data.bin")]
       [b0 (get-u8 port)]   ; 0
       [b1 (get-u8 port)]   ; 1
       [b2 (get-u8 port)]   ; 2
       [b3 (get-u8 port)]   ; 3
       [b4 (get-u8 port)]   ; eof
       [b5 (get-u8 port)])  ; eof
  (list b0 b1 b2 b3 b4 b5)) ; => (0 1 2 3 #!eof #!eof)
```

```scheme
(define read-bytes
  (lambda (port)
    (let ([byte (get-u8 port)])
      (cond
        [(eof-object? byte) '()]
        [else (cons byte (read-bytes port))]))))


(let ([port (open-file-input-port "data.bin")])
  (read-bytes port)) ; => (0 1 2 3)


(let* ([bytes #vu8(0 1 2 3)]
       [port (open-bytevector-input-port bytes)])
  (read-bytes port)) ; => (0 1 2 3)
```

`lookahead-u8`

```scheme
(let* ([port (open-file-input-port "data.bin")]
       [L0 (lookahead-u8 port)] ; 0
       [b0 (get-u8 port)]       ; 0
       [L1 (lookahead-u8 port)] ; 1
       [b1 (get-u8 port)])      ; 1
    (list L0 b0 L1 b1)) ; => (0 0 1 1)
```

`get-bytevector-n`

```scheme
(let* ([port (open-file-input-port "data.bin")]
       [v0 (get-bytevector-n port 3)]   ; #uv8(0 1 2)
       [v1 (get-bytevector-n port 3)]   ; #uv8(3)
       [v2 (get-bytevector-n port 3)])  ; eof
    (list v0 v1 v2)) ; => (#vu8(0 1 2) #vu8(3) #!eof)
```

`get-bytevector-n!`

```scheme
(let* ([port (open-file-input-port "data.bin")]
       [bv (make-bytevector 5 255)]            ; #uv8(255 255 255 255 255)
       [r0 (get-bytevector-n! port bv 0 3)]    ; 3 | bv = #uv8(0 1 2 255 255)
       [r1 (get-bytevector-n! port bv 0 3)]    ; 1 | bv = #uv8(3 1 2 255 255)
       [r2 (get-bytevector-n! port bv 0 3)])   ; eof
  (list r0 r1 r2 bv)) ; => (3 1 #!eof #vu8(3 1 2 255 255))
```

`get-bytevector-some`

```scheme
(let* ([port (open-file-input-port "data.bin")]
       [v0 (get-bytevector-some port)]    ;  at least one byte and possibly more. Implementation dependent.
       [v1 (get-bytevector-some port)])
  (list v0 v1)) ; => (#vu8(0 1 2 3) #!eof)
```

`get-bytevector-all`



```scheme
(let* ([port (open-file-input-port "random.bin")]
       [v0 (get-bytevector-all port)]   ; reads all of the bytes available before eof.
       [v1 (get-bytevector-all port)])
  (list v0 v1))

; => (#vu8(125 221 255 44 97 12 3 87 240 97 61 65 209 254 52 140)
;     #!eof)
```

## Recipies

__Read and parse a word__

```scheme
; get-u8

(define get-u16-le
  (lambda (port)
    (let ((low  (get-u8 port))
          (high (get-u8 port)))
      (+ low (* high 256)))))

; bytevector-u16-ref (and friends)

(define get-u16-be
  (lambda (port)
    (bytevector-u16-ref (get-bytevector-n port 2) 0 (endianness big))))

; Example

(let* ([bytes #vu8(1 0 1 0)]
       [port (open-bytevector-input-port bytes)])
  (list 
    (get-u16-le port)
    (get-u16-be port))) ; => (1 256)
```

__Bits and bytes__

```scheme
; C: (1U << k) - 1

(let ([n 3])
  (list
    (- (expt 2 n)  1)
    (- (ash 1 n)   1)
    (- (fxsll 1 n) 1))) ; => (7 7 7) ; 7 = 111
```
