const _array = [1, 2, 3, 4, 9];

const findElement = _array.findLast(element => {
    console.log(element);
    return element == 9
})
console.log(findElement);