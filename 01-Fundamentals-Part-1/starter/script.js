// 8. Linking with JavaScript File

// Two ways of linking a script file
// 1. Inline script
// 2. External script

let j = 'amazing';
// if (j === 'amazing') alert('JS is from external script');

console.log(40 + 8 + 23 - 10, ": external script");

// 9. Values and Variables
let firstName = "Jonas";
let first = "John";
console.log(firstName);

// Rules

// 1. Variables cannot start with numbers.
// let 5ive = 'a';

// 2. Variables can only contain Dollar Sign or Text or Number or Underscore.
let $dollar = 10;
let _under = 10;
let $5under = 10;

// 3. Variables cannot contain reserved keyword. 
// let new = 10;
// let function = 10;
// let name = "jake"; (This is a reserved keyword. But it is legal to use it. But it is not a good practise to use a variable which says only name. Instead we can go with firstName or lastName)

// Conventions :
// 1. It is not a good practise to start a variable name with an uppercase. Because, we use it in Object Oriented Programming.
// 2. PI is constant and can be write in all Uppercase.
let PI = 3.1415;

// 11. Data Types

// 1. Boolean
console.log(true);
let javaScript = true;
console.log(javaScript);

// TypeOf
console.log(typeof javaScript);

// Dynamic typing
javaScript = "Test"
console.log(typeof javaScript);

// Undefined
// Undefined here is value and value data type
let year;
console.log(year);
console.log(typeof year);

year = 2000;
console.log(typeof year);

// Both value and data type are undefined
// Null says a object. But it is undefined. It is a bug in JS which is not fixed because of legacy reasons
console.log(typeof null);

// 13. Basic Operators

const now = 2023;

// Subtraction
const ageJonas = now - 1991;
const ageSarah = now - 2000;
console.log(ageJonas, ageSarah);

// Division
console.log(ageJonas / 2);

// Multiplication
console.log(ageJonas * 2);

// Exponenantial
console.log(2 ** 3);

// Concatunation
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment Operators
let x = 10 + 5;
console.log(x);

let y = 10 + 5; // 15
y += 10; // y = y + 10 = 25
y *= 4; // y = y * 4 = 100
y++; // y = y + 1 = 101
y--; // y = y - 1 = 100
y--; // y = y - 1 = 99
console.log(y);

// Comparision operators
console.log(ageJonas > ageSarah); // > < >= <=
console.log(ageSarah >= 18);