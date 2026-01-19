[Top](../chez.md)  [Prev](./install_chez.md) [Next](./chez_scripts.md)

# Interactive Chez

__Start__

```
$ scheme

Chez Scheme Version 10.4.0-pre-release.2
Copyright 1984-2025 Cisco Systems, Inc.

>
```

__Stop__

To exit the REPL call `exit` or type `<CTRL-D>`.

```
> (exit)
```

__Load file__

A program loaded via `load` is scoped at top level, where it can see all top-level bindings.

```
; hello.ss
(display msg)
```

```
> (define msg "Hello")
> (load "hello.ss")
Hello
```

__Load program__

A program loaded via `load-program` can see only the bindings made visible by the leading `import` form.

```
; goodbye.ss
(import (rnrs))
(display "Goodbye")
```

```
> (load-program "goodbye.ss")
Goodbye
```
__Interrupt__

```
> (let loop () (loop)) ; oh no!

<CTRL-C>

break> ?

Type e to exit interrupt handler and continue
     r or q to reset scheme
     a to abort scheme
     n to enter new cafe
     i to inspect current continuation
     s to display statistics

break> r

>
```

__Debug__

```
> (/ 1 0)
Exception in /: undefined for 0

> (debug)

debug> ?

Type i  to inspect the raise continuation (if available)
     s  to display the condition
     c  to inspect the condition
     e  or eof to exit the debugger, retaining error continuation
     q  to exit the debugger, discarding error continuation

debug> s
  Exception in /: undefined for 0

debug> q

>
```

_Would you like to know more?_

[CSUG / Chapter 2. Using Chez Scheme](https://cisco.github.io/ChezScheme/csug/use.html)
> Section 2.1 Interacting with Chez Scheme
>
> Section 2.4  Using Libraries and Top-Level Programs
