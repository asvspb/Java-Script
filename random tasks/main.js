function factorial(n) {
    console.log("Вызов функции с n =", n);

    if (n === 0) {
        console.log("Достигнуто условие выхода (n = 0)");
        return 1;
    } else {
        const result = n * factorial(n - 1);
        console.log("Вычислен факториал", n, "=", result);
        return result;
    }
}

console.log("Факториал 5 =", factorial(5));
