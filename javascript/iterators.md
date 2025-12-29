[Top](../javascript.md)

__Links__

MDN
> [Iterators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators)
>
> [Iteration protocols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)

# Iterators

```javascript
let a = {
  count: 1,

  // Iterator protocol

  next() { 
    if (this.count < 4) {
      return {value: this.count++, done: false};
    }
    return {value: undefined, done: true};
  },
  
  // Iterable

  [Symbol.iterator]() {
    return this;
  }
}

let v = [];

for (const x of a) {
  v.push(x)
}

v; // -> [1, 2, 3]

a.count = 1;

let w = [ ...a ];

w; // -> [1, 2, 3];

a.count = 1;

let [n, ...m] = a;

n; // -> 1
m; // -> [2, 3]

```

Built in iterators.

```
String, Array, TypedArray, Map, Set, and Segments ...
```

Generator functions returns an iterator.

```javascript
let a = {
  *[Symbol.iterator]() { // returns a new iterator every time.
    yield 1;
    yield 2;
    yield 3;
  }
}

let v = [ ...a ];

v; // -> [1, 2, 3];

let w = [ ...a ];

w // -> [1, 2, 3];
```

@TODO: async
