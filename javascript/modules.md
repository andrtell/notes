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

An entire module can be imported

```html
<script type="module">
import * as M from "./m.js";
M.f(); // console: Mmm
</script>
```

```javascript
// m.js
export function f() {
    console.log('Mmm');
}
```

Modules can be aggregated by re-exporting features.

```html
<script type="module">
import * as Agg from "./agg.js";
Agg.f(); // console: hello from a
Agg.g(); // console: hello from b
</script>
```

```javascript
// agg.js
export * from "./a.js";
export { g } from "./b.js";
```

```javascript
// a.js
export function f() { console.log('hello from a');
```

```javascript
// b.js
export function g() { console.log('hello from b');
```
