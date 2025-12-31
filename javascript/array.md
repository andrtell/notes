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

`.length`

```javascript
let b = [];

b.length; // 0

b.length = 3;

b; // [<3 empty items>]

b[1] = 7; 

b; // [ <1 empty item>, 7, <1 empty item> ]

b.length = 0;

b; // []

b[2] = 7;

b; // [ <2 empty items>, 7]

b = [,,7];

b; // [ <2 empty items>, 7]

delete b[2];

b; // [ <3 empty items> ]

b[0]; // undefined
```

`for`


```javascript
let v = [], c = [1,,3]; // [1, <1 empty item>, 3] 

for (let i = 0; i < c.length; i++) {
    v.push(c[i]);
}

v; // [1, undefined, 3];
```

`for .. of`

```javascript
let v = [], d = [1,,3]; // [1, <1 empty item>, 3]

for (const val of d) {
    v.push(val);    
}

v; // [1, undefined, 3];
```

`.forEach`

```javascript
let v = [], e = [1,,3]; // [1, <1 empty item>, 3]

e.forEach((val, _idx, _e) => {
    v.push(val);
});

v; // [1, 3]
```

`.map`

```javascript
let f = [1,,3]; // [1, <1 empty item>, 3]

f.map((val, _idx, _f) => val, _this); //  [1, <1 empty item>, 3]
```

`.filter`

```javascript
let g = [1,,3]; // [1, <1 empty item>, 3]

g.filter((val, _idx, _g) => true, _this); // -> [1, 3]
```

`.reduce`

```javascript
let h = [1,,3]; // [1, <1 empty item>, 3]

h.reduce((acc, val, _idx, _h) => { acc.push(val); return acc }, []); // [1, 3]

h.reduce((acc, val) => acc + val); // 4 (1 + 3)
```

`.some`

```javascript
let i = [1,,3]; // [1, <1 empty item>, 3]

i.some((val, _idx, _i) => val == 3, _this); // true 
```

`.every`

```javascript
let j = [1,,3]; // [1, <1 empty item>, 3]

j.every((val, _idx, _j) => val == 3, _this); // false 
```

`.indexOf`, `.lastIndexOf`

```javascript
let k = [1,,3, 11, 3]; // [1, <1 empty item>, 3, 11, 3]

k.indexOf(3); // 2

k.indexOf(17); // -1

k.lastIndexOf(3); // 4

k.lastIndexOf(17); // -1
```

`.findIndex`, `.findLastIndex`

```javascript

let l = [1,,3, 11, 3]; // [1, <1 empty item>, 3, 11, 3]

l.findIndex((val, _idx, _l) => val == 3, _this); // 2

l.findIndex((val, _idx, _l) => val == 17, _this); // -1

l.findLastIndex((val, _idx, _l) => val == 3, _this); // 4

l.findLastIndex((val, _idx, _l) => val == 17, _this); // -1

```

`.find`, `.findLast`

```javascript
let m = [1,,3, 11, 3]; // [1, <1 empty item>, 3, 11, 3]

m.find((val, _idx, _m) => val == 3, _this); // 3

m.find((val, _idx, _m) => val == 17, _this); // undefined

m.findLast((val, _idx, _m) => val == 3, _this); // 3

m.findLast((val, _idx, _m) => val == 17, _this); // undefined
```


