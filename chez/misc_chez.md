# Misc Chez

## __On Scheme strings and text input__

From [R6RS](https://www.r6rs.org/final/html/r6rs/r6rs-Z-H-4.html#node_sec_Temp_9):

_"Strings are finite sequences of characters with fixed length and thus represent arbitrary Unicode texts"_

__In other words__:

Strings in R6RS scheme represents textual data as a sequences of Unicode scalar values / code points.

```
> (string->list "AB 徐恒")

(#\A #\B #\space #\徐 #\恒)
```

__REPL__

So, what happens when type text into the REPL (the Waiter) ?

```
> "AB 徐恒"

"AB 徐恒"
```

1. Your _modern_ terminal sends UTF-8 bytes to Chez Scheme's standard input.
2. The built in __expression-editor__ decodes those bytes on the fly into Unicode code points.
3. The __reader__ sees the " … " and creates a in memory scheme string.
4. A textual representation of the string is encoded into UTF-8 and those bytes are sent to your terminal.

A _transcoder_ handles the de/en-coding process. 

We can see what _transcoder_ is used by looking at the parameter `current-transcoder`.

```
> (current-transcoder)
#<transcoder utf-8 none replace>
```

__LOAD__

Loading files works similar but instead of of reading from `(standard-input-port)` a file port is used.

The default transcoder used `UTF-8` as seen above.

__In other words__: 

When calling `(load "file.ss")`, `(load-program "file.ss")`, etc .. the target file `file.ss` is assumed (the default) to be encoded using `UTF-8`.

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

__GENERAL CASE__

When reading or writing text from and to an external source:

You must

1. Decide how that stream of text is encoded.
2. Use a suitable transcoder.

```scheme
; capture.ss

(let-values 
  ([(in out err pid) 
    (open-process-ports "ls -l"
                        (buffer-mode block)
                        (make-transcoder (utf-8-codec)))]) ; transcoder created using the utf-8-codec.
   (display (get-string-all out)))
```

_Would you like to know more?_


_Would you like to know more?_

[Chez / Chapter 1. Introduction](https://cisco.github.io/ChezScheme/csug/intro.htm)

[Chez / Chapter 9. Input/Output Operations](https://cisco.github.io/ChezScheme/csug/io.html)

[TSPL / Chapter 7. Input and Output](https://www.scheme.com/tspl4/io.html)
