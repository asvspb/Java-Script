// добавление и удаление свойств объектов //
const myVar = {
    time: 5,
    zone: 'Moscow',
};

// добавляем свойство в объект через doted notation
myVar.continent = 'Europe';

// задаем другую переменную
const countryPropertyName = 'country';

// добавляем в объект первой переменной свойство, используя вторую переменную, через bracket notation
myVar[countryPropertyName] = 'Russia';

// если пытаться добавить новое свойство через скобочную нотацию, то валидатор ругается
// myVar['time'] = 3;

console.table(myVar);