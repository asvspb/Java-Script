// Math.ceil(x): Returns the smallest integer greater than or equal to a number.
// console.log(Math.floor(Math.PI));

// Math.exp(x): Returns E^x, where E is Euler's number (approximately 2.718).

// Math.floor(x): Returns the largest integer less than or equal to a number.
// console.log(Math.floor(4.99));

// Math.max(a, b, ..., z): Returns the largest of zero or more numbers.
// console.log(Math.max(1, 2, 3, 4, 5));


// Math.min(a, b, ..., z): Returns the smallest of zero or more numbers.
// Math.pow(base, exponent): Returns base raised to the power of exponent.

// Math.random(): Returns a random number between 0 and 1.
// console.log(Math.random(10, 10) * 10);

// Math.round(x): Returns the value of a number rounded to the nearest integer.
// console.log(Math.round(Math.PI));


// function timeLeft(myBirthday) {
//     const ageToLive = 70;
//     const daysPerYear = 365;
//     const daysPerWeek = 7;
//     const daysPerMonth = 30;
//     let currentAge = myAge(myBirthday);
//     let daysLeft = (ageToLive - currentAge) * daysPerYear;
//     let weeksLeft = daysLeft / daysPerWeek;
//     let monthsLeft = daysLeft / daysPerMonth;
//     let earn = daysLeft / 5 * 40;

//     console.log(`Your age is ${currentAge}. You have ${daysLeft} days, ${weeksLeft} weeks,
//     and ${monthsLeft} months left. You can earn ${earn} dollars.`);
// }

// function myAge(myBirthday) {
//     const now = new Date();
//     return now.getFullYear() - myBirthday;
// }

function calculateBMI() {
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    let bmi = Math.round(weight / (height * height));
    let message;
    if (bmi <= 18.5) {
        message = "Your BMI is " + bmi + ", you are underweight.";
    } else if (bmi <= 25) {
        message = "Your BMI is " + bmi + ", you have a normal weight.";
    } else if (bmi <= 30) {
        message = "Your BMI is " + bmi + ", you are slightly overweight.";
    } else if (bmi <= 35) {
        message = "Your BMI is " + bmi + ", you are obese.";
    } else {
        message = "Your BMI is " + bmi + ", you are clinically obese.";
    }
    let result = document.getElementById("result");
    result.innerHTML = message;
}
