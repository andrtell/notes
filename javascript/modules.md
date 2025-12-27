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

Modules can `import` other modules.

```html
<script type="module">
    import { x, g } from './m.js';
    g(x);
</script>
```

```javascript
// ./m.js
export const x = 1;

export function g(a) { console.log(a); }
```


__NodeJS__
