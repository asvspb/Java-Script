const _array = [1, 2, 3, 4, 9];

// method returns the last element in the array that satisfies the given predicate
const findElement = _array.findLast(element => {
    console.log(element);
    return element == 9
})

// новый массив из старого
const __array = [1, 2, 3, 4, 9];
// const new__array = [...__array];
// new__array[new__array.length - 1] = 5;
// console.log(new__array);
const new__array = __array.with(-1, 5); //?

