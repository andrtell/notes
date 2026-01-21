[Top](../chez.md)  [Prev](./interactive_chez.md)

# Chez scripts

__Basic scripts__

We can run a program as a shell script using `scheme --script <FILE>`. 

The _parameter_ `command-line` becomes available when run as a script.

```scheme
; run.ss
(display (command-line))
```
```
$ scheme --script run.ss A Z
(run.ss A Z)
```

Also works with the shell shebang `#!`.

```scheme
#! /usr/bin/env -S scheme --script

(display "Works!")
```

```
$ chmod +x ./run.ss
$ ./run.ss
Works!
```

Chez ignores the first line of a _loaded_ script if it begins with `#!` followed by a `/` or `space`.

```
> (load "run.ss")
Works!
```

To run the script as a RNRS top-level program use `scheme --program`.

```
(import (rnrs))
(display "Works!")
```

```
$ scheme --program run.ss
Works!
```

`scheme-script` may be used instead of `scheme --program`.

```
#! /usr/bin/env scheme-script
(import (rnrs))
(display "Works!")
```

```
$ ./run.ss
Works!
```

_Would you like to know more?_

[Chez / Chapter 1. Introduction](https://cisco.github.io/ChezScheme/csug10.1.0/intro.html)
> Section 1.3. Parameters

[Chez / Chapter 2. Using Chez Scheme](https://cisco.github.io/ChezScheme/csug/use.html)
> Section 2.5. Scheme Shell Scripts

## Recipes

__Environment variables__

```scheme
(display (getenv "HOME"))
```

```
$ scheme --script run.ss
/home/user
```

_Would you like to know more?_

[Chez / Chapter 12. System Operations](https://cisco.github.io/ChezScheme/csug/system.html)
> Section 12.16. Environmental Queries and Settings

__Shell commands__

```scheme
(system "ls -l")
```

```
$ scheme --script run.ss
total 0
-rw-rw-r-- 1 tell tell 0 Jul 20 00:15 a.ss
-rw-rw-r-- 1 tell tell 0 Jul 20 00:15 b.ss
0
```

_Would you like to know more?_

[Chez / Chapter 4. Foreign Interface](https://cisco.github.io/ChezScheme/csug9.5/foreign.html)
> Section 4.1. Subprocess Communication

__Capture shell command output__

```scheme
; capture.ss

(let-values 
  ([(in out err pid) 
    (open-process-ports "ls -l"
                        (buffer-mode block)
                        (make-transcoder (utf-8-codec)))])
   (display (get-string-all out)))
```

```
$ scheme --script capture.ss

total 0
-rw-rw-r-- 1 tell tell 0 Jul 20 00:15 a.ss
-rw-rw-r-- 1 tell tell 0 Jul 20 00:15 b.ss
```

_Would you like to know more?_

[Chez / Chapter 4. Foreign Interface](https://cisco.github.io/ChezScheme/csug9.5/foreign.html)
> Section 4.1. Subprocess Communication

[TSPL / Chapter 7. Input and Output](https://www.scheme.com/tspl4/io.html)
> Section 7.1. Transcoders
>
> Section 7.2. Opening Files




_TODO_

[Chez / Section 9.16. File System Interface](https://cisco.github.io/ChezScheme/csug/io.html#./io:h16)

[TSPL / Section 7.10. Filesystem Operations](https://www.scheme.com/tspl4/io.html#./io:h10)
