let number1, number2 = 0;

// задаем функцию подсчета площади квадрата
function squareFn(number1, number2) {
    const counter = number1 * number2;
    return counter;
}

console.log(squareFn(5,15)); //активизация функции
console.log(squareFn.name);  //забрать заданное свойство объекта

