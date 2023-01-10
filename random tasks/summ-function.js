function checkSum(a, b) {
    let c;
    a = a / 10;
    b = b * b;
    c = a + b;
    return c;
}

console.log(checkSum(26, 12));