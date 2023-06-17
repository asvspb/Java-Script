let simpleArr = ['a', 'b', 'c', 'd'];

// slice маскирует элемент/ы массива, а сам массив не изменяется
simpleArr.slice(1); //?
simpleArr.slice(-1); //?
simpleArr.slice(1, 2); //?

// splice удаляет элемент/ы непосредственно из массива и массив изменяется
simpleArr.splice(-1);    //?
simpleArr //?

// shallow copy
let simpleArrCopy = simpleArr.slice(0); //?
let simpleArrCopy2 = [...simpleArr]; //?


// Важно понимать, что оператор === в JavaScript сравнивает объекты по ссылке, а не по их содержимому. Если вам необходимо сравнить два массива по содержимому, вам нужно использовать другие методы, например, сравнивать значения элементов массивов в цикле или использовать методы, такие как every() или JSON.stringify() для сравнения значений элементов.
simpleArr === simpleArrCopy; //?
simpleArr === simpleArrCopy2; //?
simpleArrCopy === simpleArrCopy2; //?

// проверка на равенство
const areEqual = simpleArr.every((value, index) => value === simpleArrCopy[index]);
console.log(areEqual); // true

// reverse возвращает массив в обратном порядке, изменяя сам массив
simpleArr.reverse();    //?


// concat объединяет массивы в один
simpleArr.concat(simpleArrCopy); //?

// join объединяет массив в строку
simpleArr.join(''); //?
typeof (simpleArr.join('')); //?

// sort сортирует массив по возрастанию или убыванию
simpleArr.sort(); //?