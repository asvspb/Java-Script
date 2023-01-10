const personOne = {
    name: 'Alex',
    age: 25,
    gender: 'underfined'
};

function incrAge(person) {
    person.age += 1;
    return person;
}

incrAge(personOne);
console.log(personOne.age);