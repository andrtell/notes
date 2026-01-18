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

__Interrupt eval__

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
