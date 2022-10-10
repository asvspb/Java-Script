// доступ к вложенным свойствам объекта

// задаем переменную, которая свойством объекта
const mitsubishi = 'Lancer';

const nestedVar = {
    city: 'Tokyo',
    country: 'Japan',
    auto: {                 // вложенный объект внутри объекта
        toyota: 'Camry',
        honda: 'Civic',
        mitsubishi          // свойства объекта будут унаследованы из переменной
    },
};

delete nestedVar.auto.honda; // удаление свойства внутри вложенного объекта

console.table(nestedVar);