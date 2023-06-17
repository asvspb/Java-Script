const myFirstName = 'Alex'


if (myFirstName === 'Alex') {
    var oldVariable = 'asv'
    console.log('true')
} else {
    console.log('false')
}

function someRandomFunc() {
    var oldVariable2 = 'asv-spb'
    newVariable = oldVariable + myFirstName
    console.log(newVariable)
    return newVariable
}

console.log(someRandomFunc());
console.log(oldVariable);

