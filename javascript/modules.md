[Top](../javascript.md)

__Links__

MDN
> [Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

__Browser__

_Scope_

Top-level names are private to the module (unless exported).

```html
<script type="module">
    var x = 1;
    function g(a) { console.log('a = ' + a); }
    y(x); // console: a = 1
</script>

<script type="module">
    y(x); // out of scope.
</script>
```

_Load_

```html
<script type="module" src="z.js">
```

```
                          ┌── JS download (+ deps) ──┐            ┌── JS execution ──┐
└── HTML parsing ─────────────────────────────────────────────────┘ 
```

```html
<script type="module" async src="z.js">
```

```
                    ┌── JS download (+ deps) ──┬── JS execution ──┐                  
└── HTML parsing ──────────────────────────────┘                  └── HTML parsing ──┘
```

Modules are loaded and executed once.

```html
<script type="module" src="z.js"></script>
```

(same as)


```html
<script type="module" src="z.js"></script> 
<script type="module" src="z.js"></script>
```

Modules can `import` features from other modules.

```html
<script type="module">
    import { x, f } from './a.js'; // named imports
    import { y, g } from './b.js'; //
    f(x); // console: v = 1
    g(y); // console: w = 2 
</script>
```

```javascript
// ./a.js
export const x = 1;

export function f(v) { console.log('v = ' + v); }
```

```javascript
// ./b.js
const y = 2;

function g(w) { console.log('w = ' + w); }

export {y, g};
```

A module can have `1`  _default_ export.

```html
<script type="module">
    import g from './a.js'; // default import
    import h from './b.js'; // 
    g(); // console: hello
    h(); // console: world
</script>
```
```javascript
// a.js
function f() { console.log('hello'); }

export default f;
```

```javascript
// b.js
export default function() { console.log('world'); }
```

