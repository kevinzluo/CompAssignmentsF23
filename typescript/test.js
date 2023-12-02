function square(n) {
    return n * n;
}
function numberString(i) {
    var s = "";
    if (i > 0) {
        for (var k = 1; k <= i; k++) {
            s += k.toString();
        }
    }
    return s;
}
