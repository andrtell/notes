# Filesystem

```janet
(defn file-exists? [path]
  (not (nil? (os/stat path))))
```

```janet
(defn slurp-file! [path]
  (if-with [file (file/open path)]
    (file/read file :all)
    (error (string "File '" path "' not found."))))
```
