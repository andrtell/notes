[Top](../javascript.md)

__Links__

MDN
> [Object prototypes](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes)

__Notes__

[Objects](./objects.md)

# Prototypes

_"There are ONLY objects"_

Object variant.

```javascript

let a = { x: 1 };

let b = Object.create(a);

Object.getPrototypeOf(b) === a; // -> true

b.x; // -> 1

b.hasOwnProperty("x"); // -> false

Object.hasOwn(b, "x"); // -> false

("x" in b); // -> true

a.isPrototypeOf(b); // -> true
```

```
──> b
    └─ [[prototype]] ──> a
                         ├─ x: 1
                         └─ [[prototype]] ──> Object.prototype
```

Function variant.

```javascript

function C() {
    this.y = 1;
} 

let d = new C(); // constructor call with new.

Object.getPrototypeOf(d) === C.prototype; // -> true

(d instanceof C); // -> true, since C.prototype is in the proto-chain of d.

d.y; // -> 1

d.hasOwnProperty("y"); // -> true

Object.hasOwn(d, "y"); // -> true

("y" in d); // -> true

C.prototype.isPrototypeOf(d); // -> true
```

```
──> d
    ├─ y: 1
    └─ [[prototype]] ──> C.prototype
                           └─ [[prototype]] ──> Object.prototype
```

Class variant.

```javascript
class E {
    constructor() {
        this.z = 1;
    }
}

(typeof E); // -> "function"

class F extends E {}

Object.getPrototypeOf(F.prototype) == E.prototype; // -> true

let g = new F();

Object.getPrototypeOf(g) === F.prototype; // -> true

(g instanceof F); // -> true
(g instanceof E); // -> true

g.z; // -> 1
```

```
──> g
    ├─ z: 1
    └─ [[prototype]] ──> F.prototype
                           └─ [[prototype]] ──> E.prototype
                                                  └─ [[prototype]] ──> Object.prototype
```

