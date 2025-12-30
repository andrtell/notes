[Top](../debug.md)


# CLI Debugger

```javascript
// a.js
let x = 1;

x = x + 1;

console.log(x);
```

```sh
$ node inspect a.js

> 1 let x = 1
  2
  3 x = x + 1;
```

`list`

```sh
debug> list()

> 1 let x = 1;
  2
  3 x = x + 1;
  4
  5 console.log(x);
  6
```

`next`

```sh
debug> next

  1 let x = 1;
  2
> 3 x = x + 1;
  4
  5 console.log(x);
```

`step`, `out`

```sh
debug> next

  1 let x = 1;
  2
  3 x = x + 1;
  4
> 5 console.log(x);

debug> step

step in node:internal/console/constructor:413
 411 const consoleMethods = {
 412   log(...args) {
> 413     if (onLog.hasSubscribers) {
 414       onLog.publish(args);
 415     }

debug> out

  3 x = x + 1;
  4
> 5 console.log(x);
  6
```





`watch`, `unwatch`, `watchers`

```sh
debug> watch("x")

debug> watchers
  0: x = 1

debug> next

Watchers:
  0: x = 2

  3 x = x + 1;
  4
> 5 console.log(x);
  6

debug> unwatch(0)
```

`repl`
```sh
debug> repl
Press Ctrl+C to leave debug repl
> x
2
```

`exec`

```sh
debug> exec("x + 1")
3
```

`restart`

```sh
debug> restart

> 1 let x = 1;
  2
  3 x = x + 1;
```

`cont`, `setBreakpoint`, `clearBreakpoint`, `breakpoints`

```sh
debug> setBreakpoint('a.js', 5)

debug> breakpoints
#0 a.js:5

debug> cont

  3 x = x + 1;
  4
> 5 console.log(x);
  6

debug> clearBreakpoint('a.js', 5)

debug> breakpoints
No breakpoints yet
```

`.exit`

```sh
debug> .exit
```

