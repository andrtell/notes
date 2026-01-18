[Top](../chez.md)  [Next](./using_chez.md)

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

_Note_: `ta6le` where `t` = threaded, `a6` = AMD64, `le` = linux.

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

_Would you like to know more?_

[BUILD instructions](https://github.com/cisco/ChezScheme/blob/main/BUILDING)


## Other

__Uninstall__

```
$ sudo make uninstall
```
