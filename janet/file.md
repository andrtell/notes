# Filesystem

```janet
(defn file-exists? [path]
  (not (nil? (os/stat path))))
```

```janet
(defn slurp-file [path]
  (try
    (if-with [file (file/open path)]
        [:ok (file/read file :all)]
        [:error "File not found"])
    ([err fib]
      [:error err])))
```
