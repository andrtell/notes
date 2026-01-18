# Install Chez

__Clone__

```
$ git clone --filter=blob:none https://github.com/cisco/ChezScheme.git
```

```
$ cd ChezScheme
```

__Build__

```
$ ./configure

Configuring for ta6le, and will create boot files via pb
```

_Note_: `ta6le` where `t` = threaded, `a6` = AMD64, `le` = little endian.

```
$ make
```

__Install__

```
$ sudo make install
```

__Verify__

```
$ scheme --version

10.4.0-pre-release.2
```

```
$ petite --version

0.4.0-pre-release.2
```

## More

__Uninstall__

```
$ sudo make uninstall
```
