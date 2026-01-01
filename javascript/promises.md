[Top](../javascript.md)

__Links__

MDN
> [Promise()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)

# Promises

```javascript
const f = setTimeout, g = setTimeout;
```

```javascript
f(
  function() {
    g(
      function() {
        // ...
      }
    )
  }
);
```

```javascript
let p = new Promise(
  function executor(resolve) {
    f(
      function() {
        g(
          function() {
            resolve();
          }
        )
      }
    );
  }
);

p.then(
  function() {
    // ...
  }
)
```


```javascript
let q = new Promise(
  function executor(resolve) {
    f(resolve);
  }
);

q.then(
  function () {
    let r = new Promise(
      function executor(resolve) {
        g(resolve);
      }
    );

    r.then(
      function() {
        // ...
      }
    )
  }
)

```

```javascript
let u = new Promise(
  function executor(resolve) {
    f(resolve);
  }
);

let w = u.then(
  function () {
    let v = new Promise(
      function executor(resolve) {
        g(resolve);
      }
    );

    return v;
  }
)

w.then(
  function () {
    // ...
  }
);
```

```javascript
let a = function () {
  return new Promise(function executor(resolve) { f(resolve); });
}

let b = function () {
  return new Promise(function executor(resolve) { g(resolve); });
}
```

```javascript
a().then(
  function() {
    return b();
  }
).then(
  function() {
    // ...
  }
);
```

```javascript
a().then(b).then(function () { /* ... */ });
```

```javascript
await a();
await b();

// ...
```
