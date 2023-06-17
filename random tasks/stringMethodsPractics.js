/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.
THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure
SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀
*/

'calculateAge******'.length //?
'underscoreCase******'.length //?
'delayedDeparture****'.length //?

document.addEventListener('DOMContentLoaded', function () {
    // Этот код будет выполнен, когда весь HTML-документ будет загружен
    const newButton = document.createElement('button');
    newButton.textContent = 'Convert to camelCase';
    document.body.append(document.createElement('textarea'));
    document.body.append(newButton);

    // When the 'newButton' is clicked
    newButton.onclick = function () {
        // Get the value of the text area
        const text = document.querySelector('textarea').value;

        // Split the text into an array by each new line character '\n'
        let textArray = text.split('\n');

        // Create a new div element
        const div = document.createElement('div');

        // Append the div element into the body of the HTML document
        document.body.append(div);

        // Loop through each element in the 'textArray' array
        for (let i = 0; i < textArray.length; i++) {
            // Combine string methods on each element and append the result to the div element
            div.innerHTML += combineStrMethods(textArray[i]).padEnd(20, '*') + '✅'.repeat(i + 1) + '<br>';
        }
    };

});

let experimentalStr = 'underscore_case'

let combineStrMethods = function (str) {
    let newStr = str
        .toLowerCase()
        .split('_')
        .map(function (word, index) {
            return index === 0 ? word : word[0].toUpperCase() + word.slice(1);
        })
        .join('');
    return newStr
} //?
combineStrMethods("combineStrMethods") //?
'delayedDeparture    '.length //?

/* ------------------------- flight API fetched data ------------------------ */

// generate string similar to flights
function generateFlightString(numFlights) {
    const airports = ['fao', 'txl', 'bru', 'lis', 'hel', 'msc', 'tky', 'lon', 'par']; // список аэропортов
    const statuses = ['_Delayed_Departure', '_Arrival', '_Delayed_Arrival', '_Departure']; // список статусов рейса
    let result = '';
    for (let i = 0; i < numFlights; i++) {
        // генерируем случайные значения для параметров рейса
        const airportFrom = airports[Math.floor(Math.random() * airports.length)];
        const airportTo = airports[Math.floor(Math.random() * airports.length)];
        const flightNumber = Math.floor(Math.random() * 100000000);
        const hours = Math.floor(Math.random() * 24).toString().padStart(2, '0');
        const minutes = Math.floor(Math.random() * 60).toString().padStart(2, '0');
        // выбираем случайный статус рейса
        const status = statuses[Math.floor(Math.random() * statuses.length)];
        // создаем строку для текущего рейса
        const flightString = `${status};${airportFrom}${flightNumber};${airportTo}${flightNumber};${hours}:${minutes}`;
        // добавляем текущий рейс к результату
        result += flightString;
        // добавляем символ "+" для разделения рейсов в итоговой строке
        if (i < numFlights - 1) {
            result += '+';
        }
    }
    return result;
}
// генерируем строку, аналогичную flights, с 5 рейсами
// const flightString = generateFlightString(5); //?

// const flights =
//     '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// let f1ights = flights.split('+') //?
// typeof f1ights //?

// f1ights[0] //?

// let f1ightStatuses = [], airportFrom = [], airportTo = [], f1ightTime = [];

// // provide for loop to grab into array f1ightStatuses
// for (let i = 0; i < f1ights.length; i++) {
//     f1ightStatuses.push(f1ights[i].split(';')[0]);
//     airportFrom.push(f1ights[i].split(';')[1]);
//     airportTo.push(f1ights[i].split(';')[2]);
//     f1ightTime.push(f1ights[i].split(';')[3]);
// }

// // /[a-zA-Z]+/g
// for (let i = 0; i < f1ightStatuses.length; i++) {
//     f1ightStatuses[i] = f1ightStatuses[i].replace(/_+/g, ' ').trim(); //?
// }

// for (let i = 0; i < airportFrom.length; i++) {
//     // @ts-ignore
//     airportFrom[i] = airportFrom[i].slice(0, 3 - (airportFrom[i].length)).toUpperCase() //?
// }

// for (let i = 0; i < airportTo.length; i++) {
//     // @ts-ignore
//     airportTo[i] = airportTo[i].slice(0, 3 - (airportTo[i].length)).toUpperCase() //?
// }

// for (let i = 0; i < f1ightTime.length; i++) {
//     // @ts-ignore
//     f1ightTime[i] = f1ightTime[i].replaceAll(':', 'h') //?
// }

// // Delayed Departure from FAO to TXL (11h25)
// for (let i = 0; i < f1ightStatuses.length; i++) {
//     console.log(`${f1ightStatuses[i]} from ${airportFrom[i]} to ${airportTo[i]} (${f1ightTime[i]})`); //?
// }

const flightsData =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

let flights = flightsData.split('+');
let flightStatuses = [], airportFrom = [], airportTo = [], flightTime = [];

for (let i = 0; i < flights.length; i++) {
    const [status, from, to, time] = flights[i].split(';');
    flightStatuses.push((status.replace(/_+/g, ' ')).trim());
    airportFrom.push(from.slice(0, 3).toUpperCase());
    airportTo.push(to.slice(0, 3).toUpperCase());
    // @ts-ignore
    flightTime.push(time.replaceAll(':', 'h'));
}

for (let i = 0; i < flightStatuses.length; i++) {
    console.log(`${flightStatuses[i]} from ${airportFrom[i]} to ${airportTo[i]} (${flightTime[i]})`.padStart(30, ' '));
}

