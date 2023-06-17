// flat() используется для сведения вложенных массивов в одноуровневый массив.
const arraay = [1, 2, [3, 4, [5, 6]]];
const flatArr = arraay.flat(2); //?

// flatMap() позволяет применить функцию к каждому элементу массива и затем "разгладить" массив.
const arraay1 = [1, 2, 3, 4];
const flatMapArr = arraay1.flatMap(x => [x, x * 2]);
console.log(flatMapArr); // [1, 2, 2, 4, 3, 6, 4, 8]

// trimStart(), trimEnd() используется для удаления пробельных символов в начале и в конце строки.
const str123 = "   Hello World!   ";
const trimmedStr = str123.trimStart().trimEnd(); //?

// Object.fromEntries() преобразует список пар ключ-значение, представленный в виде массива, в объект. Object.entries() все наоборот
const arras23 = [['a', 1], ['b', 2], ['c', 3]];
const obj = Object.fromEntries(arras23);
console.log(obj); // {a: 1, b: 2, c: 3}
