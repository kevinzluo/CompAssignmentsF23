# lab 2: javascript basics
Excercize 2: p1.parsely.com
## C. Welcome to Programming in Javascript

3.

```js
var y = "Hello World";
y.includes("hello"); // false
y.repeat(10); // 'Hello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello World'
```

4.

```js
function square(i) = {
    return 0; // complete this code
}

square(2.5); // 6.25
square("hello") // VM47:1 Uncaught ReferenceError: hello is not defined at <anonymous>:1:8
```

5.

```js
function square(i) {
  return i * i; // complete this code
}
```

6.

```js
function numberString(i) {
  s = "";
  if (i > 0) {
    for (let k = 1; k <= i; k++) {
      s += k.toString();
    }
  }
  return "s";
}
`