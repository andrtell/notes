# Binary IO

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
```

```scheme
(let* ([port (open-file-input-port "data.bin")]
       [b0 (get-u8 port)])
  (list b0)) ; => (0)
```

```scheme
(let* ([port (open-file-input-port "data.bin")]
       [b0 (get-u8 port)]  ; 0
       [b1 (get-u8 port)]  ; 1
       [b2 (get-u8 port)]  ; 2
       [b3 (get-u8 port)]  ; 3
       [b4 (get-u8 port)]) ; eof
  (list b0 b1 b2 b3 b4))   ; => (0 1 2 3 #!eof)
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
