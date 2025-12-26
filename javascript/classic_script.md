[Top](../javascript.md)

__Links__

MDN
> [<script>](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script)

__Browser__

_Scope_

Top-level names in classic scripts are global (added to `window`).

```html
<script>
    var x = 1;
    function g(a) { console.log('a = ' + val); }
</script>

<script>
    g(x); // console: a = 1
</script>
```

_Load_

```html
<script src="z.js"> 
```
```
                   ┌── JS download ──┬── JS execution ──┐                  
└── HTML parsing ──┘                                    └── HTML parsing ──┘
```

```html
<script defer src="z.js"> 
```


```
                          ┌── JS download ──┐           ┌── JS execution ──┐
└── HTML parsing ───────────────────────────────────────┘ 
```

```html
<script async src="z.js"> 
```


```
                    ┌── JS download ──┬── JS execution ──┐                  
└── HTML parsing ─────────────────────┘                  └── HTML parsing ──┘
```
