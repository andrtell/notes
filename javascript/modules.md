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

is equivalent to:


```html
<script type="module" src="z.js"></script> 
<script type="module" src="z.js"></script>
```

__NodeJS__
