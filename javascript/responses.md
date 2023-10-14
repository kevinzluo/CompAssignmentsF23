# lab 2: javascript basics

## C. Welcome to Programming in Javascript

3.

```js
var y = "Hello World";
y.includes("hello"); // write the output in this comment
y.repeat(10); // write the output in this comment
```

4.

```js
function square(i) = {
    return i * i; // complete this code
}

square(2.5); // 6.25!
square("hello") // NaN
```

5.

```js
function square(i) {
  if(typeof(number) == "number")
  {
    return number * number;
  }
  return -1;
}
```

6.

```js
function numberString(i) {
  let num = "";
  for(var j = 1; j < i +1; j++)
  {
    num = num + j;
  }
  return num; 
}
`