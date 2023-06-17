
let lastName = 'Williams';  //?
let oldLastName = lastName; //?
oldLastName = 'Smith';          //?
lastName //?

const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    job: 'Teacher',
    isMarried: undefined,
    hobby: function () {
        return 'Coding';
    },
    family: ['Jane', 'John', 'Mark'],
    languages: {
        commonLanguages: {
            english: 'Good',
            spanish: 'Great',
            french: 'Cool',
        },
        programmingLanguages: {
            js: 'Cool',
            py: 'Awesome',
        }
    },
};
// const marriedJessica = jessica; //ссылка на объект jessica, а не новый объект в памяти. объекты не копируются присвоением значений.
// marriedJessica.lastName = 'Doe';    // Doe
// console.log('Before married', jessica.lastName); // Doe
// console.log('After married', marriedJessica.lastName); // Doe

// частичная копия объекта jessica через спред оператор, копируем только часть объекта family
const partOfJessica = { ...jessica.family }; //?

// частичная копия объекта jessica через Object.assign, копируем только часть объекта family
const partOfJessicaAssign = Object.assign({}, jessica.languages); //?


// // поскольку обекты копируются а не присваивают значения, то нужно использовать Object.assign или spread operator
// const marriedJessica = Object.assign({}, jessica); //?
// marriedJessica.lastName = 'Doe';  //?
// // marriedJessica.family.push('Jane', 'Bob'); //?

// console.log('Before married', jessica.lastName, jessica.family); //?
// console.log('After married', marriedJessica.lastName, marriedJessica.family); //?
// console.log(marriedJessica.hobby()); //?

// // используя спред оператор
// const jessicaSpread = {
//     ...jessica,
//     lastName: 'Doe',
// }
// jessicaSpread.family.push('Jane', 'Bob'); //?

// console.log('Before married', jessica.lastName, jessica.family); //?
// console.log('After married', jessicaSpread.lastName, jessicaSpread.family); //?
// console.log(jessicaSpread.hobby()); //?

// так же можно использовать JSON.stringify и JSON.parse, но этот метод не копирует функции или underfined
// const jessicaJSON = JSON.parse(JSON.stringify(jessica)); //?
// jessicaJSON.lastName = 'Doe';  //?

// console.log(jessicaJSON.languages);    //?
// console.log(jessicaJSON.hobby()); //?