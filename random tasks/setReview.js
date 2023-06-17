// Set - это коллекция уникальных значений, то есть каждое значение может быть встречено только один раз.

const mySet = new Set([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 2, 3, 1, 5, 7, 9]); //?



// итерация классически или с новыми функциями
for (const item of mySet) console.log(item); //?

mySet.forEach((index, value) => {
    console.log(index, value);
}); //?

// проверка на существование значения в коллекции
console.log(mySet.has(1)); //?
console.log(mySet.has(10)); //?

// добавление значения в коллекцию
mySet.add(10); //?

// кол-во элементов в коллекции
mySet.size; //?

// удаление значения из коллекции
mySet.delete(10); //?

// очистка коллекции
mySet.clear(); //?
console.log(mySet); //? - пусто

const notUnicArr = [1, 2, 2, 3, 4, 4, 5];

// Создание коллекции из массива, которая автоматически фильтрует дубликаты
const uniqueSet = new Set(notUnicArr);

// Преобразование коллекции обратно в массив
const uniqueArr1 = Array.from(uniqueSet);
const uniqueArr2 = [...uniqueSet];  //?
const uniqueArr3 = [...uniqueSet.values()]; //?
const uniqueArr4 = [...uniqueSet.keys()]; //?
const uniqueArr5 = [...uniqueSet.entries()]; //?
const uniqueArr6 = [...new Set(notUnicArr)]; //?


// строковые также могут быть преобразованы в коллекцию
const uniqueStrArr = [...new Set(notUnicArr.map(item => item.toString()))]; //?
// можно подсчитать кол-во уникальных букв в строковых
console.log(uniqueStrArr.length);   //?

