[Top](../common_lisp.md)

# Install SBCL

Downlaod latest binary from [SBCL](https://www.sbcl.org/).

```sh
$ ls
sbcl-2.6.0-x86-64-linux-binary.tar.bz2
```

```sh
$ bzip2 -cd sbcl-2.6.0-x86-linux-binary.tar.bz2 | tar xvf -
```

```sh
$ cd sbcl-2.6.0-x86-64-linux/
$ INSTALL_ROOT=$HOME/opt/sbcl-2.6.0 sh install.sh
```

```sh
# ~/.bashrc
export SBCL_HOME="$HOME/opt/sbcl-2.6.0/lib/sbcl"

export PATH="$PATH:$HOME/opt/sbcl-2.6.0/bin"
```

```sh
$ sbcl
*
```

## Links

[SBCL](https://www.sbcl.org/)
