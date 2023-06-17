// суммирование
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((acc, current) => acc + current, 0); //?

// максимум
// const numbers = [1, 2, 3, 4, 5];
// const max1 = numbers.reduce((acc, current) => acc > current ? acc : current, 0); // 5
// const min1 = numbers.reduce((acc, num) => acc > num ? num : acc) //?

// Подсчет количества элементов с помощью reduce
// const numbers = [1, 2, 3, 4, 5];
// const count = numbers.reduce((acc) => acc + 1, 0); // 5

// Сортировка массива объектов по заданному свойству
// const people = [
//     { name: 'John', age: 25 },
//     { name: 'Mary', age: 21 },
//     { name: 'Peter', age: 30 },
// ];

// const sortedPeople = people.reduce((acc, current) => {
//     const index = acc.findIndex(item => item.age > current.age);
//     const position = index === -1 ? acc.length : index;
//     acc.splice(position, 0, current);
//     return acc;
// }, []);

// console.log(sortedPeople); // [{ name: 'Mary', age: 21 }, { name: 'John', age: 25 }, { name: 'Peter', age: 30 }]

// Группировка элементов массива по заданному условию:
// const numbers = [1, 2, 3, 4, 5];
// const grouped = numbers.reduce((acc, current) => {
//     const key = current % 2 === 0 ? 'even' : 'odd';
//     if (!acc[key]) {
//         acc[key] = [];
//     }
//     console.log(acc[key]);
//     return acc;
// }, {});

// console.log(grouped);

