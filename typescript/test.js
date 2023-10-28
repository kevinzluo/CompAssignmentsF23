function square(n) {
    return n * n;
}
function numberString(i) {
    var s = "";
    if (i <= 0) {
        return "-1";
    }
    else {
        for (var j = 1; j <= i; j++) {
            s += j;
        }
    }
    return s;
}
