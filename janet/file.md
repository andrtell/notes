# File

```janet
(defn main
  [& args]
  (var txt "")
  (with [f (file/open "main.janet")]
    (set txt (file/read f :all)))
  (print txt))
```

```
$ janet main.janet

(defn main
  [& args]
  (var txt "")
  ...
```
