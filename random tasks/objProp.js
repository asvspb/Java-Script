
// Чтобы посмотреть все методы, которые имеет объект, можно воспользоваться методом Object.getOwnPropertyNames() для получения массива всех свойств объекта, включая названия методов, а затем использовать метод Array.prototype.filter() для фильтрации только методов.
const personSome = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    greet() {
        console.log(`Hello, my name is ${this.getFullName()}.`);
    }
};
const methods = Object.getOwnPropertyNames(personSome).filter(function (prop) {
    return typeof personSome[prop] === 'function';
});

Object.getOwnPropertyNames(Set.prototype); //?
Object.getOwnPropertyNames(Array.prototype); //?
Object.getOwnPropertyNames(String.prototype); //?
Object.getOwnPropertyNames(Number.prototype); //?
Object.getOwnPropertyNames(Boolean.prototype); //?
Object.getOwnPropertyNames(Date.prototype);//?
Object.getOwnPropertyNames(Object.prototype);//?
Object.getOwnPropertyNames(Function.prototype);//?
Object.getOwnPropertyNames(RegExp.prototype);//?
Object.getOwnPropertyNames(Error.prototype);//?

/* --------------------------------- функция -------------------------------- */
let exchange = {
    // curencies
    curencies: {
        usdEur: 0.91,
        usdGbp: 0.81,
        usdRub: 81.5,
        gbpRub: 100.3,
        eurRub: 88.7
    },
    currencySigns: {
        russia: '₽',
        germany: '€',
        england: '£',
        usd: '$',
    },
    // cola's price in usd
    colaUsd: {
        russia: 0.68,
        germany: 1.26,
        england: 1.99,
        usa: 0.76
    }
};
// create function to find price of cola in eur, usd, gbp, rub
let colaRussia = (exchange.colaUsd.russia * exchange.curencies.usdRub).toFixed(2) + exchange.currencySigns.russia //?
let colaGermany = ((exchange.colaUsd.germany * exchange.curencies.usdEur * exchange.curencies.eurRub).toFixed(2) + exchange.currencySigns.russia) //?
let colaEngland = ((exchange.colaUsd.england * exchange.curencies.usdGbp * exchange.curencies.gbpRub).toFixed(2) + exchange.currencySigns.russia) //?
