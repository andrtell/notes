[Top](../javascript.md)

__Links__

MDN
> [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

# Arrays

__Create__

`[]`, `Array`, `.of()`

```javascript
let a = [];

a = new Array(); // []

a = Array(); // []

a = Array.of(); // []

a = [1, 3, 7];

a = Array.of(1, 3, 7); // [1, 3, 7]
```

__Access__

`[]`, `.at()`

```javascript
let a = [1, 3, 7];

a[0]; // 1

a[99]; // undefined

a.at(0); // 1 

a.at(-1); // 7

a.at(99); // undefined

```

__Iterate__

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

`.forEach()`

```javascript
let v = [], e = [1,,3]; // [1, <1 empty item>, 3]

e.forEach((val, _idx, _e) => {
    v.push(val);
});

v; // [1, 3]
```

__Length__

`.length`

```javascript
let b = [];

b.length; // 0

b.length = 3; // b is [<3 empty items>]

b[1] = 7; // b is [ <1 empty item>, 7, <1 empty item> ]

b.length = 0; // b is []

b[2] = 7; // b is [ <2 empty items>, 7]

b = [,,7]; // b is [ <2 empty items>, 7]

delete b[2]; // b is [ <3 empty items> ] 

b = [1, 2, 3]

delete b[1]; // b is [1, <1 empty item>, 3]

b[1]; // undefined
```

__Combine__

`.concat()`

```javascript
let x = [1, 2], y = [3, 4];

x.concat(y); // [1, 2, 3, 4]

x; // [1, 2]
y; // [3, 4]

```

__Mutate__

`.pop()`, `.push()`, `.shift()`, `.unshift()`

```.javascript
let z = [1, 3, 7, 11];

z.pop(); // 11

z; // [1, 3, 7]

z.push(11); // 4 ~ .length

z; // [1, 3, 7, 11]

z.shift(); // 1

z; // [3, 7 ,11]

z.unshift(1); // 4 ~ .length

z; // [1, 3, 7, 11]
```

`.splice()`

```javascript
let y = ['a', 'b', 'c'];

y.splice(1, 0, 'x'); // [], no deleted elements

y; // ['a', 'x', 'b', 'c']

y.splice(1, 1, 'z'); // ['x']

y; // ['a', 'z', 'b', 'c']

y.splice(1, 1, 'm', 'n'); // ['z']

y; // ['a', 'm', 'n', 'b', 'c']

y.splice(1, 2); // ['m', 'n']

y; // ['a', 'b', 'c']
```

`.sort()`

```javascript
let z = [3, 11, 7, 1];

z.sort(); // z

z; // [1, 3, 7 ,11]

let y = [3, 11, 7, 1];

y.toSorted(); // [1, 3, 7, 11]

y; // [3, 11, 7, 1]
```

`.reverse()`

```javascript
let u = [1, 2, 3];

u.reverse(); // u

u; // [3, 2, 1]

u.toReversed(); // [1, 2, 3]

u; // [3, 2, 1]
```

__Transform__

`.with()`

```javascript
let w = ['a', 'b', 'c'];

w.with(1, 'X'); // ['a', 'X', 'c'];
```

`.map()`

```javascript
let f = [1,,3]; // [1, <1 empty item>, 3]

f.map((val, _idx, _f) => val, _this); //  [1, <1 empty item>, 3]
```

`.reduce()`, `.reduceRight()`

```javascript
let h = [1,,3]; // [1, <1 empty item>, 3]

h.reduce((acc, val, _idx, _h) => { acc.push(val); return acc }, []); // [1, 3]

h.reduceRight((acc, val, _idx, _h) => { acc.push(val); return acc }, []); // [3, 1]

h.reduce((acc, val) => acc + val); // 4 (1 + 3)
```

`.toSpliced()`

```javascript
// analog to  .splice()

let y = ['a', 'b', 'c'];

y.toSpliced(1, 0, 'x'); // ['a', 'x', 'c', 'd'] 
```

`.toSorted()`

```javascript
// analog to .sort()

y.toSorted(); // [1, 3, 7, 11]

y; // [3, 11, 7, 1]
```

`.toReversed()`

```javascript
// analog to .reverse()

u.toReversed(); // [1, 2, 3]

u; // [3, 2, 1]
```

`.flat()`

```javascript
let w = [1, [2, [3, 4]];

w.flat(); // [1, 2, [3, 4]]

w.flat(2); // [1, 2, 3, 4] 

w.flat(Infinity); // [1, 2, 3, 4]
```

`.flatMap()`

```javascript
let v = [1, [2, [3, 4]]];

v.flatMap((val, _idx, _v) => val * 11, _this);  // [11, NaN]

// eq. to .map().flat()
```

__Select__

`.filter()`

```javascript
let g = [1,,3]; // [1, <1 empty item>, 3]

g.filter((val, _idx, _g) => true, _this); // -> [1, 3]
```

`.slice()`

```javascript
let z = ['a', 'b', 'c', 'd'];

z.slice(); // ['a', 'b', 'c', 'd']

z.slice(2); // ['c', 'd']

z.slice(2, 3); // ['c'], non-inclusive end 

z.slice(-2); // ['c', 'd']

z.slice(2, -1); // ['c'], non-inclusive end

z; // ['a', 'b', 'c', 'd']
```

__Test__

`.includes()`

```javascript
let z = [1,,7, 11, 13]; // [1, <1 empty item>, 3, 7 , 11]

z.includes(7); // true

z.includes(7, 3); // false
```

`.some()`

```javascript
let i = [1,,3]; // [1, <1 empty item>, 3]

i.some((val, _idx, _i) => val == 3, _this); // true 
```

`.every()`

```javascript
let j = [1,,3]; // [1, <1 empty item>, 3]

j.every((val, _idx, _j) => val == 3, _this); // false 
```

__Search__

`.indexOf()`, `.lastIndexOf()`

```javascript
let k = [1,,3, 11, 3]; // [1, <1 empty item>, 3, 11, 3]

k.indexOf(3); // 2

k.indexOf(17); // -1

k.lastIndexOf(3); // 4

k.lastIndexOf(17); // -1
```

`.findIndex()`, `.findLastIndex()`

```javascript

let l = [1,,3, 11, 3]; // [1, <1 empty item>, 3, 11, 3]

l.findIndex((val, _idx, _l) => val == 3, _this); // 2

l.findIndex((val, _idx, _l) => val == 17, _this); // -1

l.findLastIndex((val, _idx, _l) => val == 3, _this); // 4

l.findLastIndex((val, _idx, _l) => val == 17, _this); // -1

```

`.find()`, `.findLast()`

```javascript
let m = [1,,3, 11, 3]; // [1, <1 empty item>, 3, 11, 3]

m.find((val, _idx, _m) => val == 3, _this); // 3

m.find((val, _idx, _m) => val == 17, _this); // undefined

m.findLast((val, _idx, _m) => val == 3, _this); // 3

m.findLast((val, _idx, _m) => val == 17, _this); // undefined
```


