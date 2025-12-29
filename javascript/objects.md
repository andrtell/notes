[Top](../javascript.md)

__Links__

MDN
> [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
>
> [structuredClone](https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone)
>
> [get](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)
>
> [set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set)

__Notes__

[Prototypes](./prototype.md)

__Objects__

Create.

```javascript
// literal
let a = { x: 1 };

// constructed
let b = new Object();
b.x = 1;
```

Properties.

```javascript
let c = {
  x: 1,
  ["y" + "z"]: 2
}

c.x;     // -> 1
c["x"];  // -> 1
c.yz;    // -> 2
```

Property exists?

```javascript
let d = {}

d.z; // -> undefined

("z" in d); // -> false

d.hasOwnProperty("z"); // -> false.
```

Getters and setters.

```javascript
let e = {
  q: [1, 2],

  get peek() {
    return this.q[this.q.length - 1];
  },

  set top(v) {
    this.q.push(v);
  },
};

e.peek; // -> 2
e.top = 3
e.peek; // -> 3
```

Iteration.

```javascript
let f = {x: 1, y: 2};
let v = [];

for (let k in f) {   // iterates over enumerable properties
  v.push(f[k]);
}

v; // -> [1, 2];
```

See: Arrays and iterators (todo).

Shallow copy.

```javascript
let a = { x : 1 }

let b = { y : 2 }

{ ...a, ... b} // spread operator

Object.assign({}, a , b)
```

Deep copy.

```javascript
let a = { x : 1 };

let b = { a: a };

structuredClone(b);
```
