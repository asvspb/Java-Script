const _array = [1, 2, 3, 4, 9];

// method returns the last element in the array that satisfies the given predicate
const findElement = _array.findLast(element => {
    console.log(element);
    return element == 9
})

// новый массив из старого
// const new__array = [...__array];
// new__array[new__array.length - 1] = 5;
// console.log(new__array);
const new_array = _array.with(-1, 5); //?

// сортировка массива
// _array.sort((a, b) => {
//     return a - b;
// })
const __array = [3, 9, 5, 1, 2, 7] // несортированный массив
const newSorted__array = __array.toSorted(); //?
const newReversed__array = newSorted__array.toReversed(); //?

// new arr from old and spliced (startted position and number to cutoff)
const newSpliced__array = __array.toSpliced(1, 4); //?