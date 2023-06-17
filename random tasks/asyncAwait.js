// import { response } from "express";

fetch('https://swapi.dev/api/people/4')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); //?
    })
    .then(data => console.log(data)) //?
    .catch(error => console.error('Error:', error));

async function myFirstAwait() {
    const fetchUser = await fetch('https://swapi.dev/api/people/4');
    const userData = await fetchUser.json(); //?
    console.log(userData);
}

myFirstAwait();//?

const urlS = [
    'https://swapi.dev/api/people/1',
    'https://swapi.dev/api/people/2',
    'https://swapi.dev/api/people/3',
    'https://swapi.dev/api/people/4'
]

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?
// Promise.all(urls.map(url => {
//     return fetch(url).then(response => response.json())
// })).then((value) => {
//     console.log(value[0]);//?
//     console.log(value[1]);//?
//     console.log(value[2]);//?
// }).catch(() => console.log('Error')) //?

const asyncFetch = async function () {
    try {
        const [luke, c3po, r2d2, darthVader] = await Promise.all(urlS.map(url => {
            return fetch(url).then(response => response.json())
        }));
        console.log(luke);//?
        console.log(c3po);//?
        console.log(r2d2);//?
        console.log(darthVader);//?
    } catch {
        console.log('oops');
    }
}

asyncFetch();

