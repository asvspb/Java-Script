// Question 1: Clean the room function: given an input of [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20, "1", "2", "3", "apples", "bananas", "peaches"], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

const someBigArray2 = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20, "1", "2", "3", "apples", "bananas", "peaches", true, false, false];
let numArr = groupRepeatedNumbers(sortArray(filterArray(someBigArray2, 'number')));
let strArr = filterArray(someBigArray2, 'string');
let boolArr = filterArray(someBigArray2, 'boolean');

const lastArrr = [[...numArr], [...strArr], [...boolArr]]//?

function sortArray(arr) {
    return arr.sort((a, b) => a - b)
}

function filterArray(arr, type) {
    return arr.filter(i => typeof i === type)
}

function groupRepeatedNumbers(arr) {
    const freq = arr.reduce((acc, curr) => {
        if (curr in acc) {
            acc[curr]++;
        } else {
            acc[curr] = 1;
        }
        return acc;
    }, {});
    const output = Object.keys(freq).reduce((acc, curr) => {
        const num = Number(curr);
        if (freq[curr] > 1) {
            const subarray = new Array(freq[curr]).fill(num);
            acc.push(subarray);
        } else {
            acc.push(num);
        }
        return acc;
    }, []);

    return output;
}

console.log(lastArrr);




