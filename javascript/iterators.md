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
```
