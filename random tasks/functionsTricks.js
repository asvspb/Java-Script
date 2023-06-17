'use strict';

/*
Когда примитив передается в качестве аргумента функции, происходит передача его значения. Это означает, что, если внутри функции изменить значение этого аргумента, то значение исходной переменной, переданной как аргумент, не изменится.Когда объект передается в качестве аргумента функции, происходит передача его ссылки на объект. Это означает, что, если внутри функции изменить свойство объекта, то это изменение будет отражено в исходном объекте.
*/

const flight = 'LH123';
const passenger = {
    name: 'Alexander Vasin',
    passport: 12345678900
}

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 12345678901) {
        console.log('Checked in');
    } else {
        console.log('Wrong passport');
    }
    console.log(`${passenger.name} passport was checked in. The flight number is ${flightNum}.`);
}

checkIn(flight, passenger); //?
console.log(flight);
console.log(passenger);

/* ------------------------------- first class & higher order ------------------------------ */

// "First class functions" (функции первого класса) - это свойство языка, которое означает, что функции могут быть использованы так же, как и любые другие значения, например, числа или строки.
function sum22(a, b) {
    return a + b;
}
// "Higher order functions" (функции высшего порядка) - это функции, которые могут принимать другие функции в качестве аргументов и/или возвращать другие функции в качестве своих значений.
function mapArray(arr, func) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(func(arr[i])); //?
    }
    return result;
}
const numbers = [1, 2, 3, 4, 5];
const doubled = mapArray(numbers, function (num) {
    return num * 2;
});
console.log(doubled); //?

// функция трансформер

// This function returns a transformer function that uppercases the first character of a string
function upperFirstWord() {
    // This inner function takes a string as input and returns a transformed string
    return function upperFirstWordTransformer(str) {
        // This line takes the first character of the input string and capitalizes it
        // It then concatenates the capitalized first character with the rest of the input string (excluding the first character)
        // The result is a transformed string with the first character capitalized
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
}

// This function returns another function that can transform any input string to lower case
function strToLowerCase() {
    // This inner function takes a string as argument and returns it in lower case
    return function strToLowerCaseTransformer(str) {
        return str.toLowerCase();
    };
}

function strToUpperCase() { // This is a function that returns another function
    return function strToUpperCaseTransformer(str) { // This is the function that gets returned
        return str.toUpperCase(); // This line converts the input string to upper case and returns it
    };
}
function transformerStr(str, func) {
    console.log(`Original: ${str}`);
    console.log(`Transformed: ${func(str)}`);
    console.log(`Transformed by: ${func.name}`);
}

transformerStr('hello world', upperFirstWord());
transformerStr('HElLo WORLD', strToLowerCase());
transformerStr('hello world', strToUpperCase());

// This function takes in a string 'greet' as a parameter.
// const greet = function (greet) {
//     // It then returns a new function that takes in a string 'name' as a parameter.
//     return function (name) {
//         // When the returned function is called, it logs a message to the console that greets the 'name' parameter using the 'greet' parameter.
//         console.log(`${greet}, ${name}!`);
//         // For example, if we call the function like this: greet("Hello")("John"), it will log "Hello, John!" to the console.
//     };
// }

// This is a higher-order function that returns another function.
// The first function takes a string argument `greet`.
// The second function takes a string argument `name`.
// When the second function is called, it logs a message to the console that includes the `greet` and `name` arguments.

const greet = greet => name => { console.log(`${greet}, ${name}!`) };
console.log(Object.getOwnPropertyNames(greet));

greet('Alloha')('asv');

let pointerToFunction = greet('Alloha') //?
console.log(pointerToFunction('cds')); //?

let obJprop = Object.getOwnPropertyNames(Object.getPrototypeOf(greet));
console.log(obJprop);

/* -------------------------- мутирование объектов в которых есть функции -------------------------- */
const aeroflot = {
    name: 'Aeroflot',
    country: 'Russia',
    iataCode: 'LHR',
    bookings: [],
}

const sSevenAirlines = {
    name: 'S7 Airlines',
    country: 'Russia',
    iataCode: 'RLH',
    bookings: [],
}

// This is a function called 'book' that takes in two parameters:
// 'flightNum', which is a string representing the flight number, and
// 'name', which is a string representing the name of the person booking a flight.
function book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.name} flight ${flightNum}`);
    this.bookings.push({ flight: flightNum, name: name });
}

// привязка функции к объекту. переменная не может быть использована до инициализации объекта. метод bind создает новую функцию объекте через точечную нотацию и привязывает  this внутри функции к новому объекту
aeroflot.book = book.bind(aeroflot); //?
sSevenAirlines.book = book.bind(sSevenAirlines); //?

// в случае с call мы вызываем функцию и привязываем this к новому объекту, не создавая новой сущности как в случае с bind
book.call(aeroflot, '342', 'John Nunn'); //?
book.call(sSevenAirlines, '666', 'Garry Kasparov'); //?

// добавляем пользователя и проверяем работает ли функция
sSevenAirlines.book('333', 'Michael Adams'); //?
sSevenAirlines.book('777', 'Walt Disney'); //?
console.log(aeroflot, sSevenAirlines); //?

/* ----------------------------- расчет налогов -----------------------------
This function calculates the final price of a product after applying
a tax rate to its original price.

@param {number} price - The original price of the product.
@param {number} tax - The tax rate to apply to the product, as a percentage.

@return {number} - The final price of the product after applying the tax.
-------------------------------------------------------------------- */
const addTax = function (tax, price) {
    return price + price * (tax / 100); // Calculate final price by adding tax to original price
}
console.log(addTax(10, 100));

// создание новой функции через привязку к функции addTax, которая высступает прототипом новой функции. null уточняет что нет объекта к которому надо привязаться чтобы заработал this
const addVAT = addTax.bind(null, 25);
console.log(addVAT(135));

function addVat2(price) {
    return function (tax) {
        return price + price * (tax / 100);
    }
}
console.log(addVat2(100)(25)); //?