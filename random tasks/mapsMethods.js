// Map отвечает за преобразование массива в объект, представляет собой структуру данных, которая хранит коллекцию пар "ключ-значение". 

// функция возвращает значение текущего времени (часы в числовом формате)
function getCurrentTime() {
    const date = new Date();
    return date.getHours();
}
// создаем переменную которая будет содержать значение текущего времени
const timeNow = getCurrentTime();//?
typeof (timeNow);//?

// получаем все методы объекта
Object.getOwnPropertyNames(Date.prototype);//?
Object.getOwnPropertyNames(Map.prototype);//?
Object.getOwnPropertyNames('Sring.prototype');//?
Object.getOwnPropertyNames(Array);//?

// конструктор Map
const newMap = new Map();//?
const nestedSetArray = ['a', 'b', 'c'];

// provide function that display in console given parameter
const displayInConsole = function (param) {
    console.log(param);
}
const logParam = (param) => {
    console.log(param);
};

const nestedSetFunction = function (item) {
    console.log(`${item}`);
};


// добавление элементов в объект через метод set по цепочке вызовов
newMap
    .set('key', 'value')//?
    .set('key2', 'value2')//?
    .set(nestedSetArray, 'Test')//?
    .set(nestedSetFunction(), 'Test')//?
    .set('categories', ['Italian', 'Pizza', 'Vegetarian', 'Vegan'])//?
    .set('open', 11)//?
    .set('close', 23)//?
    .set(true, 'We are open!')//?
    .set(false, 'We are closed.');
console.log(newMap);

// метод get позволяет получить значение по ключу или получить его как массив значений
newMap.get('categories');//?
newMap.get(true);//?
console.log(newMap.get((timeNow < newMap.get('close') && timeNow > newMap.get('open'))));//?

// метод delete удаляет значение по ключу
newMap.delete('key2');//?

// метод size возвращает количество элементов в объекте
newMap.size;    //?

// метод clear удаляет все значения из объекта
// newMap.clear();

// Метод keys() и values() не применяется для объектов класса Map. Вместо этого для получения ключей используется методы самого объекта класса Map.
const setKeys = Array.from(newMap.keys());//?
const setValues = Array.from(newMap.values());//?
// Метод entries() возвращает массив кортежей вида [ключ, значение]
const setEntries = Array.from(newMap.entries());//?

newMap.get(nestedSetArray) //?

// Quizz app using Map.
// нужно передать в метод Map итерируемый объект, состоящий из массивов с парами "ключ-значение", каждый из которых будет состоять только из строк!!
// @ts-ignore
const questionMap = new Map([
    ['question', 'What is the best programming language?'],
    [1, 'JavaScript'],
    [2, 'Java'],
    [3, 'Python'],
    [4, 'C#'],
    ['correct', 3],
    [true, 'Correct answer'],
    [false, 'Try again'],
]);

// @ts-ignore
console.log(questionMap.get('question'));
const answer = Number('3'); //?

// перебор объекта
for (let [key, value] of questionMap.entries()) {
    if (typeof key === 'number') {
        console.log(`${key}. ${value}`) //?
    }
}

// @ts-ignore
console.log(questionMap.get(questionMap.get('correct') === answer)); //?

const oooBject = {
    name: 'John',
    age: 30,
    city: 'New York',
    country: 'USA'
}

oooBject['name'];//?
oooBject.age;//?
oooBject.city;//?
oooBject['country'];//?
