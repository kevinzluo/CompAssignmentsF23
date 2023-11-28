# lab 2: javascript basics

## C. Welcome to Programming in Javascript

3.

```js
var y = "Hello World";
y.includes("hello"); // true
y.repeat(10); // Hello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello World
```

4.

```js
function square(i) = {
    return i*i; // complete this code
}

square(2.5); // 6.25
square("hello") // NaN
```

5.

```js
function square(number) {
            if (typeof(number)!="number"){
                return -1;
            } else{
                return number*number;
            }
        }
```

6.

```js
function numberString(i) {
            if (i<0 || i%1!=0){
                return -1;
            }
            let res = "";
            for (let j = 1; j<=i; j++){
                res += j;
            }
            return res; 
        }
`