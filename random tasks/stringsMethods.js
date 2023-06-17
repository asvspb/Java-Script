// строковые

// check for all prototype methods of String
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype
// взять из Object.getOwnPropertyNames(String.prototype) все методы и сохранить их в массив и в переменную
const methodsArr = Object.getOwnPropertyNames(String.prototype); //?
methodsArr.length; //?
methodsArr[0]; //?
methodsArr[49]; //?

/* --------------------------------- функция -------------------------------- */
// создать функцию, которая принимает строку из переменной strArr и возвращает массив из слов, которые заканчиваются символами "()"
let strArrr = `charAt() - возвращает символ в строке по указанному индексу
charCodeAt() - возвращает числовое значение Юникода символа в строке по указанному индексу
concat() - объединяет две или более строк в одну новую строку
includes() - проверяет, содержится ли подстрока в строке
indexOf() - возвращает индекс первого вхождения указанной подстроки в строку
lastIndexOf() - возвращает индекс последнего вхождения указанной подстроки в строку
match() - ищет совпадения с регулярным выражением в строке
padEnd() - добавляет указанную строку в конец текущей строки до указанной длины
padStart() - добавляет указанную строку в начало текущей строки до указанной длины
replace() - заменяет указанную подстроку в строке на новую подстроку
slice() - возвращает часть строки между двумя индексами
split() - разделяет строку на массив подстрок, используя указанный разделитель
startsWith() - проверяет, начинается ли строка с указанной подстроки
substr() - возвращает указанное количество символов строки, начиная с указанного индекса
substring() - возвращает подстроку между двумя индексами
toLocaleLowerCase() - преобразует строку в нижний регистр с учетом локали
toLocaleUpperCase() - преобразует строку в верхний регистр с учетом локали
toLowerCase() - преобразует строку в нижний регистр
toUpperCase() - преобразует строку в верхний регистр
trim() - удаляет пробелы в начале и конце строки.charAt() - возвращает символ по указанному индексу строки.
concat() - объединяет две или более строк в одну.
includes() - проверяет, содержит ли строка заданный текст.
indexOf() - возвращает индекс первого вхождения заданного символа или подстроки в строку.
lastIndexOf() - возвращает индекс последнего вхождения заданного символа или подстроки в строку.
match() - ищет совпадения с заданным регулярным выражением в строке.
replace() - заменяет заданный текст в строке на другой текст.
search() - ищет заданный текст в строке и возвращает его индекс.
slice() - возвращает часть строки, начиная с указанного индекса и заканчивая указанным индексом.
split() - разбивает строку на массив строк, используя заданный разделитель.
startsWith() - проверяет, начинается ли строка с заданного текста.
substring() - возвращает часть строки между двумя указанными индексами.
toLocaleLowerCase() - преобразует строку в нижний регистр с учетом локали.
toLocaleUpperCase() - преобразует строку в верхний регистр с учетом локали.
toLowerCase() - преобразует строку в нижний регистр.
toUpperCase() - преобразует строку в верхний регистр.
trim() - удаляет пробелы в начале и конце строки.
valueOf() - возвращает примитивное значение строки.
toString() - возвращает строковое представление объекта.
charAt() - возвращает символ по указанному индексу строки.`
function extractWords(str) {
    // заменяем символ \n на пробелы
    str = str.replace(/\n/g, ' ');

    // разбиваем строку на массив слов
    const words = str.split(' ');

    // фильтруем слова, которые заканчиваются на "()"
    const wordsList = words.filter(word => word.endsWith('()'));
    return wordsList;
}

// удаляем повторяющиеся элементы массива
const mostUsedMethSet = [...new Set(extractWords(strArrr))]; //?

// создание новой строки
const newStr0 = new String('Alpha_Woman_');  //?
typeof newStr0; //?
let newStr1 = String(newStr0); //?
typeof newStr1; //?

let myWord = 'Alpha_Man_';
myWord[3] //?
'Array'[3] //?

myWord.length //?
'Array'.length //?

myWord.indexOf('A') //?
myWord.lastIndexOf('a') //?

//первый параметр удаляет слева симолы , второй справа
myWord.slice(5) //?
myWord.slice(0, -5) //?
myWord.slice(myWord.indexOf('_') + 1, -1) //?
myWord.slice(-1) //?

/* --------------------------------- функция -------------------------------- */
// Создать функцию с именем getLetters, которая принимает один параметр str
// Функция возвращает массив букв, найденных в строке str
// Если в строке не найдено ни одной буквы, то функция возвращает 'букв нет в строке'
function getLetters(str) {
    // Используем регулярное выражение, чтобы найти все группы символов,
    // которые являются буквами (без учета регистра)
    let letters = str.match(/[a-zA-Z]+/g);

    // Если найдены буквы, то возвращаем их в виде строки, объединив все элементы массива
    if (letters) {
        return letters.join('');
    }
    // Если буквы не найдены, то возвращаем сообщение 'букв нет в строке'
    else {
        return 'букв нет в строке';
    }
}
getLetters('23e') //e //?
getLetters('23Ss') //Ss //?
getLetters('23') // букв нет в строке

/* ----------------------------- преобразование ----------------------------- */
// Код приведенный выше преобразует строку newStr1 в новую строку newStr2 с первой заглавной буквой и замененными на пробелы знаками подчеркивания
// newStr1 - исходная строка
newStr1 //?
// newStr2 - преобразованная строка.
// Вторая строка let newStr2 = newStr1.toLocaleLowerCase() преобразует строку newStr1 в нижний регистр и присваивает результат новой переменной newStr2.
let newStr2 = newStr1.toLocaleLowerCase()//?
// Цикл for обрабатывает строку newStr2, заменяя все знаки подчеркивания на пробелы, если они есть.
for (let i = 0; i < newStr2.length; i++) {
    if (newStr2[i] == '_') {
        newStr2 = newStr2.replace(newStr2[i], ' ');
    };
}
// Строка newStr2 = newStr2[0].toUpperCase() + newStr2.slice(1); преобразует первый символ строки newStr2 в верхний регистр, а затем объединяет его с остальной частью строки.
newStr2 = newStr2[0].toUpperCase() + newStr2.slice(1); //?


/* --------------------------------- функция -------------------------------- */
let newEmailStr = '  Xyu.3naet@example.com  \n';
// создать функцию с именем normalizeEmail, которая принимает один параметр str и возвращает новую строку в виде нормализованной электронной почты
function normalizeEmail(str) {
    return str.toLowerCase().trim();
}
normalizeEmail(newEmailStr) //?

let strXyu = 'Никогда не говори никогда!!';
strXyu
    .replace('не', '')
    // @ts-ignore
    .replaceAll('Никогда', 'Всегда') //?

/* --------------------------- массив из строковых -------------------------- */
console.log('a+very+long+string'.split('+')); //?
console.log('asv-spb'.split('-')); //?

let [LastName, FirstName, Patronymic] = 'Иванов Иван Иванович'.split(' '); //?
LastName //?
FirstName //?
Patronymic //?

// метод join() полностью противоположен split()
let someStr = ['Господин', 'Иванов', 'Иван', 'Петрович'].join(' ') //?

/* -------------------- функции повышения заглавной буквы ------------------- */
/*
This function takes a string as an input and returns the same string, but with the first letter of every word capitalized.
*/
let interestingWayOfCapitalize = function (str) {
    // First, we split the input string into an array of separate words
    const strArr = str.split(' ');
    // We then use the map() method to iterate over each word in the array
    // For each word, we use the replace() method to replace the first letter with a capitalized version of the same letter
    // Finally, we join the modified words back together into a single string, with spaces in between each word
    return strArr.map(name => name.replace(name[0], name[0].toUpperCase())).join(' ');
}


/**
 * This function takes a string as an argument and returns the same string with every word capitalized.
 * @param {string} str - A string with one or more words.
 * @returns {string} - The input string with each word capitalized.
 */
function toUpperCase(str) {
    // Split the input string into an array of words using space as the delimiter.
    const names = str.split(' ');

    // Map over the array of words and capitalize the first letter of each word.
    // Use `slice(1)` to add the rest of the original word to the capitalized first letter.
    const capitalizedNames = names.map(name => name[0].toUpperCase() + name.slice(1));

    // Join the capitalized words back into a single string, separated by spaces.
    return capitalizedNames.join(' ');
}


toUpperCase('васин александр сергеевич') //?
interestingWayOfCapitalize('васин александр сергеевич') //?

'abc'.padEnd(20, '*') //?
'delayedDeparture****'.length //?

/* -------------------------- credit card asterixer ------------------------- */
let cardNumber = '1234 5678 9012 3456';
cardNumber.replace(/\d/g, '*'); //?

/**
 * Takes a string representing a credit card number and returns a new string
 * with all but the last four digits replaced with asterisks.
 *
 * @param {string} str - The credit card number to be sanitized
 * @returns {string} - The sanitized credit card number
 */
let creditCardAsterixer = function (str) {
    // Extract the last four digits of the credit card number
    let number = str.slice(-4);
    // Replace all but the last four digits with asterisks
    return number.padStart(str.length, '*');
}

creditCardAsterixer(cardNumber) //?