# Binary Input

```
$ printf '\x00\x01\x02\x03' > data.bin

$ xxd data.bin

00000000: 0001 0203                                ....
```

```scheme
(file-exists? "data.bin") => ; #t
```

```scheme
(open-file-input-port "data.bin") ; => #<binary input port data.bin>

; defaults to
(open-file-input-port "data.bin" (file-options) (buffer-mode block) #f) ; =>  #<binary input port data.bin>
```

```scheme
(let ([port (open-file-input-port "data.bin")])
  (list (port? port)
        (file-port? port)
        (binary-port? port))) ; => (#t #t #t)
```

```scheme
(let ([port (open-file-input-port "data.bin")])
  (port-file-descriptor port)) ; => 7 (some integer)
```


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
       
