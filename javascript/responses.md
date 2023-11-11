# lab 2: javascript basics

## C. Welcome to Programming in Javascript

3.

```js
var y = "Hello Kai!";
y.includes("hello"); // true
y.repeat(10); // hellohellohellohellohellohellohellohellohellohello
```

4.

```js
function square(i) {
    return i*i; // complete this code
}

square(2.5); // 6.25
square("hello") Nan
```

5.

```js
function square(i) {
  if (i != int)
  {
    return -1;
  }
  else
  {
    return i*i;
  }
  return 0; // complete this code
}
```

6.

```js
function numberString(i) {
  if (i < 0)
  {
    return -1;
  }
  else
  {
    while (i > 0)
    {
      console.log(i-1);
      i --;
    }
  }
  return ""; // complete this code
}
`