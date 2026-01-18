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

[Chapter 1. Introduction](https://cisco.github.io/ChezScheme/csug10.1.0/intro.html) | _Section 1.3_

[Chapter 2. Using Chez Scheme](https://cisco.github.io/ChezScheme/csug/use.html) | _Section 2.5_

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

[Chapter 12. System Operations](https://cisco.github.io/ChezScheme/csug/system.html) | _Section 12.6_

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




[Chez Scheme Version 10 User's Guide / Section 12.5. Source Directories and Files](https://cisco.github.io/ChezScheme/csug/system.html#./system:h15)

## Shell commands

`script.ss`

```scheme
#! /usr/bin/env -S scheme --script

(system "ls -l")
```

Run it

```bash
$ ./script.ss
total 0
-rw-rw-r-- 1 tell tell 0 Jul 20 00:15 a.ss
-rw-rw-r-- 1 tell tell 0 Jul 20 00:15 b.ss
-rw-rw-r-- 1 tell tell 0 Jul 20 00:15 c.ss
0
```

Would you like to know more?

[Chez Scheme Version 10 User's Guide / Chapter 4. Foreign Interface](https://cisco.github.io/ChezScheme/csug9.5/foreign.html)

## Shell commands (with captured output)

`script.ss`

```scheme
#! /usr/bin/env -S scheme --script

(let-values 
  ([(in out err pid) 
    (open-process-ports "ls -l"
                        (buffer-mode block)
                        (make-transcoder (utf-8-codec)))])
   (display (get-string-all out)))
```

Run it

```bash
$ ./script.ss
total 0
-rw-rw-r-- 1 tell tell 0 Jul 20 00:15 a.ss
-rw-rw-r-- 1 tell tell 0 Jul 20 00:15 b.ss
-rw-rw-r-- 1 tell tell 0 Jul 20 00:15 c.ss
```

Would you like to know more?

[Chez Scheme Version 10 User's Guide / Chapter 4. Foreign Interface](https://cisco.github.io/ChezScheme/csug9.5/foreign.html)

[The Scheme Programming Language / Chapter 7. Input and Output](https://www.scheme.com/tspl4/io.html#./io:h0)

## File system

Chez comes with a handfull of procedures to allow you to interact with the file system.

* `(current-directory)`
* `(directory-list)`
* ... and so on ...

Would you like to know more?

[Chez Scheme Version 10 User's Guide / Section 9.16. File System Interface](https://cisco.github.io/ChezScheme/csug/io.html#./io:h16)

[The Scheme Programming Language / Section 7.10. Filesystem Operations](https://www.scheme.com/tspl4/io.html#./io:h10)
