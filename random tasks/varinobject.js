const myname = 'Alexander';
const myage = 47;


const dict = {
    myage,                      // свойства объекта берутся из указанных ранее переменных
    myname,                     // свойства объекта берутся из указанных ранее переменных
    hasSignAgreement: true,
    mycity: function() {        // это метод объекта dict - свойство объекта задано функцией (полная запись)
        console.log('Saratov');
    },
    mypetname() {
        console.log('Naja');    // это метод объекта dict - свойство объекта задано функцией (краткая запись)
    }
};

console.table(dict);

dict.mycity();                  // вызов метода переменной dict