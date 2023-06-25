const _array = [1, 2, 3, 4, 9];

const findElement = _array.findLast(i => {
    console.log(i);
    return i == 9
})
console.log(findElement);