function getDayOfWeek(date) {
    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[date.getDay()];
}

// Example usage:
var date = new Date('1974-7-21'); // January 1, 2021
console.log(getDayOfWeek(date)); // Outputs: "Friday"