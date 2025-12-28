[Top](../javascript.md)

__Links__

MDN
> [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

__This__

```html
<script type="module">
  this; // -> undefined

  function f() { return this; }

  f(); // -> undefined

  f.call(7) // -> 7

  let a = {
    name: "a",
    g: f
  };

  a.g(); // -> { name: "a", g: f() }

  let z = a.g;

  z(); // -> undefined

  let b = {
    name: "b",
    h: a.g
  };

  b.h(); // => { name: "b", h: f() }

  function g(f) {
    return f();
  }

  g(f); // -> undefined, at call-site: f()

  let h = f.bind(7);

  h(); // -> 7

  let j = () => this;

  j(); // -> undefined

  function k() {
    return (() => this)();
  }

  k.call(7); // -> 7

  function C() { this.x = 1; }

  new C(); // -> { x: 1 }

</script>
```

