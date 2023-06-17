//spread ... используется для "распаковки" значений из массивов и объектов
let word1 = 'hello';
let word2 = [...word1]; //?

const arrrrr = [7, 8, 9];    //?
const copyArrr = [...arrrrr, 10]; //?

const restaurantTwo = {
    nameOfRestoraunt: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // function that gluing two elements in different arrays into one
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderPasta: function (ing1, ing2, ing3) {
        return `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`;
    },

};

const ingridients = ['mushrooms', 'pepperoni', 'extra cheese'];
restaurantTwo.orderPasta(...ingridients);   //?