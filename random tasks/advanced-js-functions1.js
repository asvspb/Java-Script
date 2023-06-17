// Complete the below questions using this array:
const array = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },

];

console.log(array[1].items[1]); //?

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let newArr = []
array.forEach(element => {
    let { username } = element;
    username += `!`;
    newArr.push(username)
})
console.log(newArr);

//Create an array using map that has all the usernames with a "? to each of the usernames
// const userNameWithQuestionMark = array.map(username => {
//     return username + '?'
// })
const userNameWithQuestionMark = [];
for (let i = 0; i < array.length; i++) {
    const username = array[i];
    const modifiedUsername = username + '?';
    userNameWithQuestionMark.push(modifiedUsername);
}
console.log(userNameWithQuestionMark[0]);

//Filter the array to only include users who are on team: red
const filteredUsers = array.filter((element) => {
    return element.team === 'red'
})
console.log(filteredUsers[1]);


//Find out the total score of all users using reduce
const userCalc = array.reduce((acc, element) => {
    return acc + element.score
}, 0)
console.log(userCalc);

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
})

// ищет примитивные типы
arrayNum.includes(1) //?

// ищет по объектам
array.some((i) => i.team === 'red') //?
