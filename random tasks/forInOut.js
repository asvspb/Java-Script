const basket = ['apples', 'bananas', 'oranges', 'grapes', 'peaches']
const someObject = {
    name: 'Alexander',
    age: 48,
    slogan: 'The best is yet to come',
    city: {
        born: 'Saratov',
        live: 'Gatchina'
    }
}

// for of iterable - array, string
for (let item of basket) {
    console.log(item); //?
}

for (let item in basket) {
    console.log(item);
}

// for in - indexes or objects
for (let item in someObject) {
    console.log(someObject[item]);
    console.log(item);
}

basket[0] //?
someObject.name //?
someObject.city.live //?

