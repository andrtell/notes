[Top](../janet.md)

# Neovim + Janet

In `~/.config/nvim/init.lua`:

```lua
vim.pack.add({
 { src = 'https://github.com/Olical/conjure.git' },
})
```

Run spork netrpl.

```sh
$ janet -e "(import spork/netrepl) (netrepl/server)"
```

## Links

Neovim / Conjure
> [Conjure](https://github.com/Olical/conjure/)
> 
> [Quick-start:-Janet-(netrepl)](https://github.com/Olical/conjure/wiki/Quick-start:-Janet-(netrepl))
