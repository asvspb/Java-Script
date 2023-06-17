// Optional chaining - это оператор, который позволяет избежать ошибки "Cannot read property 'someProperty' of undefined" при обращении к свойствам объектов, которые могут быть не определены.

const dayOfweek = ['mon', 'tue', 'wen', 'thu', 'fri', 'sat', 'sun'];

const workingHours = {
    [dayOfweek[0]]: {
        open: 12,
        close: 22,
    },
    [dayOfweek[1]]: {
        open: 11,
        close: 23,
    },
    [dayOfweek[2]]: {
        open: 0, // Open 24 hours
        close: 24,
    },
    [dayOfweek[3]]: {
        open: 11,
        close: 23,
    },
    [dayOfweek[4]]: {
        open: 0, // Open 24 hours
        close: 24,
    },
}


const restaraunt = {
    name: 'Ромашка',
    owner: 'Иван',
    workingHours: workingHours,
    dayOfweek: dayOfweek,
};

// @ts-ignore
console.log(restaraunt.owner.name); //если при запросе нет поля name, то возвращается undefined
// console.log(restaraunt.owner.name.age); //если при запросе нет поля name и тем более age, то возвращается ошибка и код останавливается
// @ts-ignore
console.log(restaraunt.owner.name?.age); //? но если использовать Optional chaining, то возвращается undefined

restaraunt.dayOfweek.forEach(element => {
    const open = restaraunt.workingHours[element]?.open ?? 'закрыто';
    console.log(`в ${element} работаем с: ${open}`);
});

console.log(restaraunt.workingHours['ср']?.open);

// Цикл по объекту
const workingWeek = Object.entries(workingHours).length;
const properties = Object.keys(workingHours);
const values = Object.values(workingHours);
const entries = Object.entries(workingHours);

// по значениям объекта можно пройтись в цикле for of. значения в объекте могут быть деструктурированы, если объект сложный - [key, value]
for (const [key, { open, close }] of entries) {
    console.log(`On a ${key} we open at ${open} and close at ${close}`);
}

