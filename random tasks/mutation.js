const var1 = {
    item1: 'abc',
    item2: 5,
    item3: false,
    item4: {
        itemName: 'Name',
    }
};

const var5 = JSON.parse(JSON.stringify(var1));  // -3- двойная конвертация полностью копирует объект

const var2 = var1;                              // создается переменная, как копия, ссылающаяся на объект var1

var2.item3 = true;                              // изменяя копию меняется и изначальный объект - происходит мутация

const var3 = Object.assign({}, var1);           // -1- берем исключительно значения var1, методом Object.assign
var3.item1 = 'Changes';                         // изменения происходят только в корневых свойствах новой переменной
var3.item4.itemName = 'Hello';                  // вложенные объекты меняются вместе с оригиналом

const var4 = { ...var1 };                         // -2- так же копирует var1 и не будет на нее ссылкой, кроме вложенных


// console.table(var1);
console.log(var4);