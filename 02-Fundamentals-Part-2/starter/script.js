// 32. Strict Mode
'use strict'
// It forbidds us to do certain things
// Gives us errors

let hasDriversLincense = true;
const passTest = true;

// if (passTest) hasDriverLicense = true;
if (passTest) hasDriversLincense = true;
if (hasDriversLincense) console.log('I can drive');

// 33. Functions
// A piece of code which can be used over and over again.

function logger() {
    console.log("Log");
}

// Calling/ Invoking / Runnning
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(4, 5);
console.log(appleJuice);

// 34. Function Declarations vs Expressions

// Function Declarations
function calaAge1(age) {
    return 2023 - age;
}
const age1 = calaAge1(1991);

console.log(age1);
// In function declaration we can call the function first and declare it late. But that does not work in function Expression

//Function Expression
const calaAge2 = function (age) {
    return 2023 - age;
}
const age2 = calaAge2(1991);

console.log(age2);

// 35. Arrow Functions

const res = () => console.log('The arrow function called');
res();

const sentence = (firstName, job) => {
    console.log(`${firstName} is a successfull ${job}`);
};

sentence('Cristiano', 'Footballer');

// 36. Functions calling othere functions

function weekendTraining(firstName) {
    return `${firstName} trains 3x times than other players on weekends!`
}

function weekdayTraining(firstName) {
    return `${firstName} trains 5x times than other players on weekdays!`
}

function training(firstName) {
    const weekends = weekendTraining(firstName);
    const weekdays = weekdayTraining(firstName);
    console.log(`${weekends} and ${weekdays}`);
}

training('Virat');

// 39. Introduction to Arrays

const friend1 = 'John';
const friend2 = 'Jake';
const friend3 = 'Matt';

const friends = ['John', 'Jake', 'Matt'];
console.log(friends);

console.log(friends[0]);

function calc(age) {
    return 2037 - age;
}

const response = calc(19);
console.log(response);