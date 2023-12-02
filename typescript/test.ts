function square(n: number) {
    return n * n;
}


function numberString(i: number) {
    let s: string = "";
    if (i > 0) {
        for (let k = 1; k <= i; k++) {
            s += k.toString();
        }
    }
    return s;
}