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
       [b0 (get-u8 port)]
       [b1 (get-u8 port)]
       [b2 (get-u8 port)]
       [b3 (get-u8 port)]
       [b4 (get-u8 port)])
  (list b0 b1 b2 b3 b4)) ; => (0 1 2 3 #!eof)
```
