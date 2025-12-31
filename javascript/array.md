[Top](../javascript.md)

__Links__

MDN
> [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

# Arrays

Create

```javascript
let a = [];

a = new Array();

a = Array();

a = Array.of();

a = [1, 3, 7];

a = Array.of(1, 3, 7);

```

Length

```javascript
let b = [];

b.length; // -> 0

b.length = 3;

b; // -> [<3 empty items>]

b[1] = 7; 

b; // -> [ <1 empty item>, 7, <1 empty item> ]

b.length = 0;

b; // -> []

b[2] = 7;

b; // -> [ <2 empty items>, 7]

b = [,,7];

b; // -> [ <2 empty items>, 7]

delete b[2];

b; // -> [ <3 empty items> ]

b[0]; // -> undefined
```

Iterate


```javascript
let c = [1,,3];

c; // -> [ 1, <1 empty item>, 3 ]

let v = [];

for (let i = 0; i < c.length; i++) {
    v.push(c[i]);
}

v; // -> [1, undefined, 3];

v = [];

for (const val of c) {
    v.push(val);    
}

v; // -> [1, undefined, 3];

v = [];

c.forEach((val, idx, c) => {
    v.push(val);
});

v; // -> [1, 3]
```

Transform

```javascript
let d = [1,,3];

d.map((val, idx, d) => val, this); // -> [1, <1 empty item>, 3]

d.filter((val, idx, d) => true, this); // -> [1, 3]

d.reduce((acc, val, idx, d) => { acc.push(val); return acc }, []); // -> [1, 3]

d.reduce((acc, val) => acc + val); // -> 4 (1 + 3)
```

Test

```javascript
let e = [1,,3];

e.some((val, idx, e) => val == 3, this); // -> true 

e.every((val, idx, e) => val == 3, this); // -> false 
```

Search

```javascript
let f = [1,,3, 11, 3];

f.indexOf(3); // -> 2

f.indexOf(17); // -> -1

f.lastIndexOf(3); // -> 4

f.lastIndexOf(17); // -> -1

f.findIndex((val, idx, f) => val == 3, this); // -> 2

f.findIndex((val, idx, f) => val == 17, this); // -> -1

f.findLastIndex((val, idx, f) => val == 3, this); // -> 4

f.findLastIndex((val, idx, f) => val == 17, this); // -> -1

f.find((val, idx, f) => val == 3, this); // -> 3

f.find((val, idx, f) => val == 17, this); // -> undefined

f.findLast((val, idx, f) => val == 3, this); // -> 3

f.findLast((val, idx, f) => val == 17, this); // -> undefined
```


