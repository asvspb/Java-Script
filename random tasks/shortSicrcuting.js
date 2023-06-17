// Short-circuiting - это поведение логических операторов && и || в JavaScript, при котором выполнение операции может быть остановлено досрочно.

let t12 = true;
let t10 = function () { };
let t11 = 'string';
let t13 = [];
let t14 = {};

let t01 = false;
let t02 = 0;
let t03 = null;
let t04 = undefined;
let t05 = '';
let t06 = NaN;

let YyY = 'YyY';
let XxX = 1;

// оператор || ищет первый true и возвращает его, если он есть, иначе возвращает последний false
console.log(t01 || t05 || t03);  //?
console.log(t11 || t12 || t13);  //?
console.log(t01 || t12 || t13);  //?


// оператор && ищет первый false и возвращает его, если он есть, иначе возвращает последний true
console.log(t12 && t13 && t10);  //?
console.log(t02 && t03 && t04);  //?
console.log(t12 && t06 && t04);  //?

// Nullish coalescing operator ?? никогда не возвращает null (undefined), а если вообще нет null (undefined), то вернет значение слева.
null ?? 'string';  //?
'string' ?? null;  //?
'string' ?? true;  //?
true ?? null;  //?
[] ?? {};  //?
console.log({} ?? []); //?

// Logical assignment operator - позволяет объединить логический оператор с оператором присваивания. оператор ||= проверяет, является ли переменная x ложной (false, null, undefined, 0, NaN), и если она такова, присваивает ей значение y. Оператор &&= проверяет, является ли переменная x истинной (не false, не null, не undefined, не 0, не NaN), и если она такова, присваивает ей значение y. Оператор ??= проверяет, является ли переменная x равной null или undefined, и если она такова, присваивает ей значение y
console.log(t01 || YyY);
console.log(t11 && YyY);
console.log(null ?? YyY);

// @ts-ignore
console.log(XxX ||= YyY); //xxx = 1, ищет ложь в xxx - вернет xxx
// @ts-ignore
console.log(XxX &&= YyY); //xxx = 1, ищет истину в xxx - вернет YyY
//@ts-ignore
console.log(XxX ??= YyY); //xxx = 1, ищет нуль в xxx - вернет YyY