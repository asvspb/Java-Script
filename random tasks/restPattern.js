// Data needed for first part of the section
const restaurantThree = {
    nameOfRestoraunt: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // function that gluing two elements in different arrays into one
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    // в этой функции мы передаем в качестве аргумента массив, где первый элемент является нашей переменной, а второй элемент является наш массив
    orderPizza: function (mainIngredient, ...otherIngredients) {
        return [mainIngredient, otherIngredients];
    }

};

// spread operator (...) - распаковывет часть массива в один массив
const someArray = [7, 8, 9, ...[1, 2, 3]];  //?

// rest pattern расположен слева от знака присвоения значения (=) и он упаковывает в массив остальные значения
const [aa1, bb1, ...restOfArr] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(restOfArr); //?

const { nameOfRestoraunt, ...dataAboutestoraunt } = restaurantThree; //?
console.log(dataAboutestoraunt);

const unitedInfo1 = [...restaurantThree.categories, ...restaurantThree.starterMenu]   //?
const [pizza, , , , ...restOfAll] = unitedInfo1   //?
console.log(restOfAll);

const addFunction = function (...numbers) {
    return numbers.reduce((a, b) => a + b);
}
addFunction(2, 3); //?
addFunction(8, 2, 5, 3, 2, 1, 4); //?

let snB = [8, 2, 5, 3, 2, 1, 4]
console.log(...snB);
addFunction(...snB); //?

let resiltPizza = restaurantThree.orderPizza('mushrooms', 'onions', 'olives', 'spinach'); //?