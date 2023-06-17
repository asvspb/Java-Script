// import { response } from "express";
// import { error } from "jquery";

// // Этот пример показывает, как создать новый Promise, который возвращает строку "Data received successfully" через 2 секунды с помощью метода setTimeout(). Затем вызывается метод then(), который будет выполнен после успешного выполнения Promise. Если Promise выполнится с ошибкой, то будет вызван метод catch(), который выведет сообщение об ошибке в консоль.
// function getData() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve("Data received successfully");
//         }, 2000);
//     });
// }

// getData().then(function (result) {
//     console.log(result); //?
// }).catch(function (error) {
//     console.error(error); //?
// });


// // Solve the questions below:

// // #1) Create a promise that resolves in 4 seconds and returns "success" string
// // #2) Run the above promise and make it console.log "success"
// const myFirstPromis = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(console.log('success')) //?
//     }, 4000);
// })


// // #3) Read about Promise.resolve() and Promise.reject(). How can you make
// // the above promise shorter with Promise.resolve() and console loggin "success"
// const mySecondPromis = Promise.resolve(
//     setTimeout(() => {
//         console.log("success"); //?
//     }, 4000)
// );


// // #4) Catch this error and console log 'Ooops something went wrong'
// // Promise.reject('failed')
// Promise.reject('failed')
//     .catch(() => console.log('Ooops something went wrong'));//?

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
    'https://swapi.dev/api/people/1',
    'https://swapi.dev/api/people/2',
    'https://swapi.dev/api/people/3',
    'https://swapi.dev/api/people/4'
]

// Promise.all(urls.map(url => {
//     return fetch(url).then(response => response.json())
// })).then()

// async function fetchData() {
//     const responses = await Promise.all(urls.map(url => fetch(url)));
//     const data = await Promise.all(responses.map(res => res.json()));
//     console.log(data);
// }

// fetchData();//?

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json()) //
    .then(data => console.log(data))
    .catch(error => console.error(error));

async function getSomeData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const receivedData = await response.json();
        console.log(receivedData);
    } catch (error) {
        console.error(error);
    }
}

getSomeData();
