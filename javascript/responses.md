# lab 2: javascript basics

## C. Welcome to Programming in Javascript

3.

```js
var y = "Hello World";
y.includes("hello"); // true
y.repeat(10); // Hello World (repeated ten times)
```

4.

```js
function square(i) = {
    return (i*i); // complete this code
}

square(2.5); // 6.25
square("hello") // uncaught reference error
```

5.

```js
function square(i) {
  if (typeof i === "number") {
    return (i*i);
  }
  return (-1); // complete this code
}
```

6.

```js
function numberString(i) {
  let string = "";
              if ((typeof i === "number") && (i > 0) && ((i % 1) === 0)) {
                  for (let j = 0; j < i; j++) {
                      string += j + 1;
                  }
              }
              else {
                  string = "Please put in positive integer"
              }
              return string; 
}
`