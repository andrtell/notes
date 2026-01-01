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
let p3 = new Promise(
    function executor(resolve) {
        f(resolve);
    }
);

let p5 = p3.then(
    function () {
        let p4 = new Promise(
            function executor(resolve) {
                g(resolve);
            }
        );

        return p4
    }
)

p5.then(
    function () {

    }
);

```

```javascript
let j = function() {
    return new Promise(
        function executor(resolve) {
            f(resolve);
        }
    )
);

let k = function() {
    return new Promise(
        function executor(resolve) {
            g(resolve);
        }
    )
);
```

```javascript
let p6 = j();

let p7 = p6.then(
    function() { 
        return k() 
    }
);

p7.then(
    function () {

    }
);
```

```javascript
await j();
await k();
```
