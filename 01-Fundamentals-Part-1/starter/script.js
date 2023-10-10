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