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