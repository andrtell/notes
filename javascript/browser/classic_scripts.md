[Top](../javascript.md)

__Links__

MDN
> [<script>](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script)

__Notes__

[Modules](./modules.md)

# Classic scripts

Classic scripts can be loaded via the `<script>` tag.

```html
<script src="z.js"> 
```
```
                   ┌─── get JS ───┐┌─── eval JS  ───┐                  
──── parse HTML ───┘                                └── parse HTML ───
```

```html
<script defer src="z.js"> 
```

```
                    ┌─── get JS ───┐                ┌─── eval JS ────
──── parse HTML ────────────────────────────────────┘ 
```

```html
<script async src="z.js"> 
```

```
                    ┌─── get JS ───┬─── eval JS ───┐                  
─── parse HTML ────────────────────┘               └── parse HTML ───
```

_Scope_

Top-level names declare via `var` or `function` in classic scripts are made global (as properties on `window`).

```html
<script>
    var x = 1;
    function g(a) { console.log(a); }
</script>

<script>
    g(x); // ~> 1
    window.g(window.x); // ~> 1
</script>
```

