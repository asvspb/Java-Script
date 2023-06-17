// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine1 = '     ||<- Start line';
let turtle1 = '🐢';
let rabbit1 = '🐇';

// it should look like this:
'     ||<- Start line'
turtle1 = turtle1.padStart(7, ` `);
rabbit1 = rabbit1.padStart(15, ` `);

// when you do:
console.log(startLine1);
console.log(turtle1);
console.log(rabbit1);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle1 = turtle1.trim().padEnd(9, '=');


// #3) Get the below object to go from:
let obj0 = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}
// to this:
// 'my name is Rudolf the raindeer'
let raindeer = ''
for (let [key, value] of Object.entries(obj0)) {
    raindeer += key + ' ' + value + ' ';
    console.log(key, value);
}
let raindeer2 = Object.entries(obj0).map(value => value.join(" ")).join(' ')
console.log(raindeer);
console.log(raindeer2);