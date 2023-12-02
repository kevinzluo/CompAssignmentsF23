function square(n) {
    return n * n;
}
function numberString(i) {
    var res = "";
    for (var x = 1; x <= i; x++)
        res = res.concat(x.toString());
    return res;
}
