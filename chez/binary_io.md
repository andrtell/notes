# Binary IO

```
$ printf '\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0a\x0b\x0c\x0d\x0e\x0f' > data.bin

$ xxd data.bin

00000000: 0102 0304 0506 0708 090a 0b0c 0d0e 0f    ...............
```

```scheme
(file-exists? "data.bin") => ; #t
```

```scheme
(open-file-input-port "data.bin") ; => #<binary input port data.bin>
```

```scheme
(let ([port (open-file-input-port "data.bin")]
      [b1 (get-u8 port)]
      [b2 (get-u8 port)])
  (list b1 b2)) ; => (1 2)
```
