[Top](../javascript.md)

__Links__

MDN
> [Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

__Browser__

_Load_

Modules can be loaded via the `<script type="module">` tag.

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

Modules can be loaded via the `import` statement.

```html
<script type="module">
    import {} from './a.js';
    import {} from './b.js';
    console.log('top');
</script>
```

```javascript
// a.js
console.log('a');
```

```javascript
// b.js
console.log('b');
```
```
                                   ┌── ./b.js download ──┐
                                   ┌── ./a.js download ──┐
                          ┌──── JS download (+ deps) ────┐     ┌── a.js eval ──┐┌── b.js eval ──┐┌── top eval ──┐
└── HTML parsing ──────────────────────────────────────────────┘
```
```
a
b
top
```

Modules are _evaluated once_.

```html
<script type="module">
    import {} from './a.js';
    import {} from './a.js';
    console.log('top');
</script>
```
```
a
top
```

_Export / Import_

Modules can `export` bindings that can be aliased using `import`.

```html
<script type="module">
    import { f } from './a.js'; // named import
    f();
</script>
```

```javascript
// a.js
export function f() {}

// or
function f() {}
export { f };
```

Imported bindings are __live__.

```html
<script type="module">
import { n, inc } from './a.js';
console.log(n); // => 0
inc();
console.log(n); // => 1
</script>
```
```javascript
// a.js
export let n = 0;
export function inc() { n = n + 1; }
```

A _single_ `export` can be marked as `default`.

```html
<script type="module">
    import f from './a.js'; // default import
    f();
</script>
```

```javascript
// a.js
export default function f() {}

// or
function f() {}
export default f;
```

A module can be imported as-is.

```html
<script type="module">
import * as A from "./a.js";
A.f();
</script>
```

```javascript
// a.js
export function f() {}
```

Modules can re-export aliases.

```html
<script type="module">
import * as A from "./a.js";
A.b();
A.c();
</script>
```

```javascript
// a.js
export * from "./b.js";
export { c } from "./c.js";
```

```javascript
// b.js
export function b() {};
```

```javascript
// c.js
export function c() {};
```
