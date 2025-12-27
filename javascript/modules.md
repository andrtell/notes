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
                       ┌── fetch z.js (+ deps) ──┐                 ┌─── exec. z.js ────
─── parse HTML  ───────────────────────────────────────────────────┘ 
```

```html
<script type="module" async src="z.js">
```

```
                       ┌── fetch z.js (+ deps) ──┬─── exec. z.js ───┐                  
─── parse HTML ──────────────────────────────────┘                  └── parse HTML ────
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
                                ┌── ./b.js fetch ──┐
                                ┌── ./a.js fetch ──┐
                       ┌─── top fetch (+ deps) ────┐    ┌─── a.js exec ───┐┌─── b.js exec ───┐┌─── top exec ───
─── HTML parsing ───────────────────────────────────────┘
```
```
a
b
top
```

Modules can be _dynamically_ loaded via the `import()` function.

```html
<script type="module">
import("./a.js").then((m) => {});
console.log('top');
</script>
```

```javascript
// a.js
console.log('a');
```
```
                       ┌─── top fetch (+ deps) ───┐        ┌── top exec ──┐┌── a.js fetch ──┐┌── a.js exec ──>
>── HTML parsing ──────────────────────────────────────────┘ 
```

```
top
a
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
