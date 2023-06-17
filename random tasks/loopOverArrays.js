const someNewArr = ['1', '2', '3'];

const someNewObject = {
    name: 'John',
    age: 30,
    isMarried: false,
    address: {
        city: 'Moscow',
        country: 'Russia'
    }
};

// цикл FOR OF выводит значения массива
for (let item of someNewArr) {
    console.log(item);
}
// или индексы массива
for (let [index, value] of someNewArr.entries()) {
    console.log(index, value);
}

// цикл FOR IN выводит индексы
for (let item in someNewArr) {
    console.log(item);
}
// или ключи объекта
for (let item in someNewObject) {
    console.log(item);
}