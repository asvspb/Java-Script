const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// OFvalue смотрит значения массива
for (let _ of movements) {
    console.log(_);
}
// INdex смотрит индексы массива
for (let _ in movements) {
    console.log(_);
}

movements.forEach(function (_, i) {
    console.log(_, i);
})

// Entries делают тоже самое что и
for (let [elementOfArr, i] of movements.entries()) {
    console.log(elementOfArr, i);
}