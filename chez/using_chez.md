[Top](../chez.md)

# Using Chez

__Start REPL__

```
$ scheme

Chez Scheme Version 10.4.0-pre-release.2
Copyright 1984-2025 Cisco Systems, Inc.

>
```

__Exit REPL__

`(exit)` or `<CTRL-D>`.

```
> (exit)
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

Type (debug) to enter the debugger.

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
