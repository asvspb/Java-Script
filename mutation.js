const var1 = {
    item1: 'abc',
    item2: 5,
    item3: false,
    item4: {
        itemName: 'Name',
    }
};

const var2 = var1;                      // создается переменная, как копия, ссылающаяся на объект var1
var2.item3 = true;                      // изменяя копию меняется и изначальный объект - происходит мутация

const var3 = Object.assign({}, var1);   // присвоение исключительно значений var1 происходит методом Object.assign
var3.item1 = 'Changes';                 // изменения происходят только в корневых свойствах новой переменной
var3.item4.itemName = 'Hello';          // вложенные объекты меняются вместе с оригиналом

console.table(var1);
console.table(var3);