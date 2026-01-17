# Neovim + Janet

```lua
-- ~/.config/nvim/init.lua

vim.pack.add({
 { src = 'https://github.com/Olical/conjure.git' },
})
```

```sh
$ janet -e "(import spork/netrepl) (netrepl/server)"
```
