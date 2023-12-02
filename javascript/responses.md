# lab 2: javascript basics

## C. Welcome to Programming in Javascript

3.

```js
var y = "Hello World";
y.includes("hello"); // false
y.repeat(10); // 'Hello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello World' 
```

4.

```js
function square(i) {
    return i*i;
}

square(2.5); // 6.25
square("hello") // NaN
```

5.

```js
function square(i) {
  if (typeof i != "number") return -1; 
  return i*i; 
}
```

6.

```js
function numberString(i) {
  if (typeof i != "number" || i != Math.floor(i)) return ""; 
  let res = ""; 
  for (let x = 1; x <= i; x++) res = res.concat(x.toString()); 
  return res; 
}
`