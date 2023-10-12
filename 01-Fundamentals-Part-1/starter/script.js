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

// 14. Operator Precedence
let a, b;
a = b = 25 - 10 - 5; // a = b = 10, a = 10 b = 10
console.log(a, b);

// 17. Strings and Template Literals
const job = 'teacher';
const dob = 1991;

const jonas = "I'm " + firstName + ', a ' + (now - dob) + ' years old ' + job + '!';

console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${now - dob} years old ${job}!`

console.log(jonasNew);

// 18. Taking Decisions: if / else Statements
const age = 15;
const oldEnough = age >= 18;

if (oldEnough) console.log("Sarah can start driving!");
else {
    const yearsLeft = 19 - age;
    console.log(`Sarah has to wait ${yearsLeft}!`);
}

// 20. Type conversion and coercion
// Type conversion: Manually us converting the value type to a different value type
// Type coersion: JS automatically converting the value type.

const inputYear = '1991';
// Type conversion

// Built-in Number function
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas')); // NaN // JS gives us NaN whenever a operation on number fails to produce a new number
console.log(typeof NaN); // number // NaN is a invalid number

// Built-in String function
console.log(String(23), 23);

// Type coersion
// This happens whenever two values are of different types
console.log('Im ' + 23 + ' years old'); // Whenever JS encounters different value types with + or - the type coersion occurs

console.log('23' - '10' - 3); // 10 // String to number when -
console.log('23' + '10' + 3); // 23103 // Number to string when +
console.log('23' * '2'); // 46
console.log('23' / '2'); // 11.5

let n = '1' + 1;
n = n - 1;
console.log(n); // 10

// 21. Truthy and Falsy Values

// Five falsy values: 0, '', undefined, null, NaN // All these values will be converted to false when we try to convert them to boolean(false)

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('Jonas')); // false
console.log(Boolean('')); // true
console.log(Boolean({})); // true
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false

// Truthy and Falsy are most of time are implicit or type coercio. The JS does this in the case of logical operations or in if else conditions

const money = 0;
if (money) console.log('Dont spend it all!');
else console.log('Get a job!');

let height;
if (height) console.log('Yay! height is defined');
else console.log('Height is undefined');

// 22. Equality Operators: == vs ===
// == is Loose equality operator (The type coercion occurs)
const h = '5';
if (h == 5) console.log('The chick is fine!');
else console.log('The chick is short!');

// == is Strict equality operator 
const weight = 45;
if (age === 55) console.log('The chick is fat!');
else console.log('The chick is fit!');

let favNum;
// favNum = Number(prompt('What your favorite number?'));

if (favNum === 7) {
    console.log('You must like cristiano');
    console.log('Suii!');
} else if (favNum === 10) console.log('You might like messi');
else console.log('I cannot guess whom might guess');

if (favNum !== 7) console.log('How can you not like cristiano?');

// 23. Boolean logic

const hasDL = true;
const hasGoodVision = true;

if (hasDL && hasGoodVision) console.log('Sarah can drive!');
else console.log('Sarah cannot drive!');

const isTired = true;

if (hasDL && hasGoodVision && !isTired) console.log('Sarah cannot drive');