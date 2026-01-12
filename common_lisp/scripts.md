[Top](../common_lisp.md)

# Scripts

```sh
$ cat hello.lisp
```

```lisp
#!/usr/bin/env -S sbcl --script

(write-line "Hello, world")
```

```sh
$ chmod u+x hello.lisp

$ ./hello.lisp
Hello, world
```

## Links

SBCL Manual
> [Shebang scripts](https://www.sbcl.org/manual/index.html#Shebang-Scripts-1)
