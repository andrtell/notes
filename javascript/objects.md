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

__Objects__

```javascript
// literal
let a = { x: 1 };

// constructed
let b = new Object()
b.x = 1;

// property access
a.x;

// key access
a["x"];

// bad name
a.z; // -> undefined

// computed name
let c = {
  ["a" + "b"]: 12
}

c.ab; // -> 12
```

Shallow copy

```javascript
let a = { x : 1 }

let b = { y : 2 }

{ ...a, ... b} // spread operator

Object.assign({}, a , b)
```

Deep copy

```javascript
let a = { x : 1 };

let b = { a: a };

structuredClone(b);
```
