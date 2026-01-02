const f = setTimeout, g = setTimeout;

f(
  function() { // callback
    g(
      function() { // callback
        console.log(1);
      }
    )
  }
);


let p = new Promise(
  function executor0(resolve) {
    f(
      function a() {
        g(
          function b() {
            resolve();
          }
        )
      }
    );
  }
);

p.then(
  function c() {
    // ..
  }
)

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
    console.log(5);
  }
);


let a = function () {
  return new Promise(function executor(resolve) { f(resolve); });
}

let b = function () {
  return new Promise(function executor(resolve) { g(resolve); });
}

a().then(function () { return b(); }).then(function () { console.log('!'); });

a().then(b).then(function () {});

await a();
await b();

