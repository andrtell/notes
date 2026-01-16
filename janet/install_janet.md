[Top](../janet.md)

# Install Janet

```sh
$ git clone https://github.com/janet-lang/janet.git
```

```sh
$ cd janet
```

## Root-install

```sh
$ make -j
```

```sh
$ make test
```

```sh
$ sudo make install
```

```sh
$ sudo make install-jpm-git
```

```sh
$ sudo make install-spork-git
```

## User-install

```
$ export PREFIX=$HOME/janet # (or some other dir)
```

```sh
$ make -j
```

```sh
$ make test
```

```sh
$ make install
```

```sh
$ make install-jpm-git
```

```sh
$ make isntall-spork-git
```

## Check

```sh
$ janet --version
1.41.0-dev-8fe284b5
```

```sh
$ janet -L
spork
```
