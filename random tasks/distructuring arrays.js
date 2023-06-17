'use strict';

// Data needed for first part of the section
const restaurant = {
    nameOfRestoraunt: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // function that gluing two elements in different arrays into one
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
};

// order pizza
const [pizzaName, foodName] = restaurant.order(1, 1); //?
console.log(pizzaName, foodName);   //?

// -------------------- destructuring objects -------------------- //
// const { nameOfRestoraunt, openingHours, categories } = restaurant;
// console.log(nameOfRestoraunt, openingHours, categories);

// const {
//     nameOfRestoraunt: newRestorauntName,
//     openingHours: hours,
//     categories: cat,
// } = restaurant; //?
// console.log(newRestorauntName, hours, cat); //?

// const {
//     menu = [],
//     starterMenu: starters = [],
//     mainMenu = [],
// } = restaurant; //?
// console.log(menu, starters, mainMenu);

// const { fri: friDay } = openingHours;
// console.log(friDay);

// const {
//     fri: {
//         open: openFri,
//         close: closeFri,
//     }
// } = openingHours; //?
// console.log(openFri, closeFri);



// -------------------- destructuring arrays -------------------- //
// const someArr = [1, 2, 3];
// const a1 = someArr[0];  //?
// const a2 = someArr[1];  //?
// const a3 = someArr[2];  //?

// // destructuring arrays and skipping elements
// let [b1, b2, , b3] = restaurant.categories;  //?
// console.log(b1, b2, b3);

// // switching the array elements in modern JS
// // let temp = b1;
// // b1 = b2;
// // b1 = temp;

// [b1, b3] = [b3, b1];  //?



// // nested destructuring
// const nested = [2, 4, [5, 6]];
// const [k, , j] = nested;  //?
// // @ts-ignore
// const [k1, , [j1, j2]] = nested;  //?
// console.log(k1, j1, j2);


// //default values for destructuring elements
// const [p = 1, q = 1, r = 1] = [8, 9];  //?
// console.log(p, q, r);


