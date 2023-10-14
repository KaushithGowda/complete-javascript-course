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

// 40. Basic Array Operations

// JS has built funtions to perform operations on  Array. They are also called Arrays.

// Push adds an item after last index of the array
const newLength1 = friends.push('mike');
console.log(newLength1);
console.log(friends);

// Unshift adds an item before 1st index of the array
const newLength2 = friends.unshift('sara');
console.log(newLength2);
console.log(friends);

// pop removes the item from last index
const popped1 = friends.pop();
console.log(popped1);
console.log(friends);

// shift removes the item from first index
const popped2 = friends.shift();
console.log(popped2);
console.log(friends);

// 42. Introduction to Objects

// There are many ways to write an obj
// Object literal via of writing an object
const obj = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    job: 'Teacher',
    friends: friends,
    dob: 1997,
    calc: function () {
        return 2023 - this.dob;
    }
}

console.log(obj);

// 43. Dot vs. Bracket Notation

console.log(obj.firstName);
console.log(obj['firstName']);

console.log(`${obj.firstName} has ${friends.length} and ${obj.friends[0]} is his best friend!`);

const calculatedAge = obj.calc();
console.log(calculatedAge);

// 46. Iteration: The for loop

console.log('This is console log-1');
console.log('This is console log-2');
console.log('This is console log-3');
console.log('This is console log-4');
console.log('This is console log-5');
console.log('This is console log-6');
console.log('This is console log-7');
console.log('This is console log-8');
console.log('This is console log-9');
console.log('This is console log-10');

for (let index = 0; index <= 10; index++) {
    console.log(`This is console log-${index}`);
};

// 47. Looping Arrays, Breaking and Continuning

const cr7 = [
    'Cristiano',
    'Ronaldo',
    7,
    ['RMD', 'MUTD', 'JUV'],
    true,
    'Striker',
    'GOAT'
];

for (let index = 0; index < cr7.length; index++) {
    // console.log(cr7[index]);
}

// Continee: This is used to skip a particular iteration
// Continue only with strings
for (let index = 0; index < cr7.length; index++) {
    if (typeof cr7[index] !== 'string') continue;
    console.log(cr7[index], typeof cr7[index]);
};

// Break: This is used to exit the loop immediately
// Break only when encounter numbers
for (let index = 0; index < cr7.length; index++) {
    if (typeof cr7[index] === 'number') break;
    console.log(cr7[index], typeof cr7[index]);
};

// 48. Looping Backwards and Loops in loops 

for (let index = cr7.length; index >= 0, index--;) {
    // console.log(index);
}

const exercise = ['Chest', 'Shoulder', 'Bicep', 'Tricep', 'Leg', 'Back']

for (let i = 0; i < exercise.length; i++) {
    console.log(exercise[i]);
    for (let index = 0; index < exercise.length; index++) {
        console.log(`Rep - ${index}`);
    }
}