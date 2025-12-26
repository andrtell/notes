[Top](../javascript.md)

__Links__

MDN
> [<script>](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script)

__Browser__

Names are global (added to `window`).

```html
<script>
    var x = 1;

    function y() {
        console.log('x = ' + x);
    }
</script>

<script>
    y(); // console: x = 1
</script>
```

Blocks HTML parsing unless `defer` or `async` is used.

Each inclusion is loaded and executed (3 times below).

```html
<script src="script.js"></script>

<!-- Blocked ... -->

<script defer src="script.js"></script>
<script async src="script.js"></script>

<!-- Not blocked ... -->
```
