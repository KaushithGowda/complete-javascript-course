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