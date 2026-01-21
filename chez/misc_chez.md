# Misc Chez

Chez Scheme uses the __UTF-8__ encoding by default for files. 

If you want to use a different encoding, you must set the `current-transcoder` parameter and then call `(load)`:

```scheme
; hello.ss, UTF16LE encoded

(display "HelloWorld ,徐恒晓")
(newline)
```

```scheme
> (parameterize ([current-transcoder (make-transcoder (utf-16-codec))])
    (load "hello.ss"))

HelloWorld ,徐恒晓
>
```

[Source: 2nd comment from burgerrg on issue 466](https://github.com/cisco/ChezScheme/issues/466)
