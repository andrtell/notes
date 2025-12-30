[Top](../debug.md)


# CLI Debug

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

debug> n

  1 let x = 1
  2
> 3 x = x + 1;
  4
  5 console.log(x);

debug> watch("x")

debug> watchers
  0: x = 1

debug> n

Watchers:
  0: x = 2

  3 x = x + 1;
  4
> 5 console.log(x);
  6

debug> .exit
```

