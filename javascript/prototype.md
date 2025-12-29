[Top](../javascript.md)

__Links__

MDN
> [Object prototypes](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes)

__Prototype__

```javascript

let a = { x: 1 };

let b = Object.create(a);

b.x; // -> 1

Object.getPrototypeOf(b) == a; // -> true

Object.getPrototypeOf(a) == Object.prototype; // -> true

```

```
──> b
    └─ [[prototype]] ──> a
                         └─ [[prototype]] ──> Object.prototype
```
