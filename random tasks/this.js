// // The this Keyword in Practice
// console.log(this);

// // function expression
// const calcAge = function (birthYear) {
//     console.log(2037 - birthYear);
//     console.log(this);
// };
// calcAge(1991);

// // arrow function
// const calcAgeArrow = birthYear => {
//     console.log(2037 - birthYear);
//     console.log(this); //?
// };
// calcAgeArrow(1980);

// // object
// const jonas = {
//     year: 1991,
//     calcAge: function () {
//         console.log(this);
//         console.log(2037 - this.year);
//     },
// };
// jonas.calcAge();

// // new object
// const matilda = {
//     year: 2017,
// };
// matilda.calcAge = jonas.calcAge;//?
// matilda.calcAge();//?
// const f = jonas.calcAge;//?
// f();//?

//create variable that contain current year
const currentYear = new Date().getFullYear();

// object with arrow function and named function
const asv = {
    firstName: 'asv',
    lastName: 'spb',
    birthYear: 1974,
    x: 0,
    ladderUp: function () {
        return this.x++;
    },
    ladderDown: function () {
        return this.x--;
    },
    greetFunction: () => {
        console.log(this);  //?
        console.log(`Hey ${this.firstName}`);        //?
    },
};


// asv.calcAge();
// asv.greetFunction();

// const personOnece = {
//     name: "John",
//     sayHello: function () {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// };

// personOnece.sayHello();

