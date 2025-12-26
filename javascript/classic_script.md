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
    function g(val) { console.log('val = ' + val); }
</script>

<script>
    g(x); // console: val = 1
</script>
```

_Load_

```
<script src=".."> 

                   ┌── JS download ──┬── JS execution ──┐                  
└── HTML parsing ──┘                                    └── HTML parsing ──┘

```

```
<script defer src=".."> 

                   ┌── JS download ──┐    ┌── JS execution ──┐
└── HTML parsing ─────────────────────────┘ 

```

```
<script async src=".."> 

                    ┌── JS download ──┬── JS execution ──┐                  
└── HTML parsing ─────────────────────┘                  └── HTML parsing ──┘

```
