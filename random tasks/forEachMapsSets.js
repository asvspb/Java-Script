const currenciesForMap = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['RUB', 'Russian ruble'],
]);
console.log(currenciesForMap); //?

// доступ к первому значению мапы
console.log(currenciesForMap.get('USD')); //?

// добавление в мапу
currenciesForMap.set('CAD', 'Canadian dollar');

// удаление
currenciesForMap.delete('EUR');

console.log(currenciesForMap);

currenciesForMap.size; //?
currenciesForMap.has('YEN'); //?


// перебор значений мапы по ключу, значению
for (const [key, value] of currenciesForMap) {
    console.log(key, value);
}

for (const value of currenciesForMap.values()) {
    console.log(value);
}

for (const key of currenciesForMap.keys()) {
    console.log(key);
}

// перебор используя функцию forEach
currenciesForMap.forEach((value, key) => {
    console.log(value, key);
})

// SET это множество, где хранятся только уникальные значения
let mySomeNewSet = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 5, 6, 7, 8, 9]);

console.log(mySomeNewSet);

// итерация в множестве имеет смысл только с одним значением, так как они не имеет индексов и значений
mySomeNewSet.forEach((value, i) => {
    console.log(value, i);
})

// доступ к элементу множества
console.log(mySomeNewSet.has(5)); //?
mySomeNewSet.delete(5); //?
mySomeNewSet.add(5); //?
mySomeNewSet.clear(); //?