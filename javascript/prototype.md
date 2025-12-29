[Top](../javascript.md)

__Links__

MDN
> [Object prototypes](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes)

__Prototype__

_"There are ONLY objects"_

```javascript

let a = { x: 1 };

let b = Object.create(a);

Object.getPrototypeOf(b) === a; // -> true

b.x; // -> 1

b.hasOwnProperty("x"); // -> false

("x" in b); // -> true
```

```
──> b
    └─ [[prototype]] ──> a
                         ├─ x: 1
                         └─ [[prototype]] ──> Object.prototype
```

```javascript

function C() {
    this.y = 1;
} 

let d = new C();

Object.getPrototypeOf(d) === C.prototype; // -> true

d.y; // -> 1

d.hasOwnProperty("y"); // -> true

("y" in d); // -> true
```

```
──> d
    ├─ y: 1
    └─ [[prototype]] ──> C.prototype
                           └─ [[prototype]] ──> Object.prototype
```


