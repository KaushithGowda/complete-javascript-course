'use strict';

// 95. Hoisting and TDZ in Practise

console.log(x); // undefined
// console.log(y); // Cannot access y before initialization
// console.log(z); // Cannot access z before initialization

var x = 10;
let y = 20;
const z = 30;

console.log(add(10, 20));
// console.log(sub(10, 20)); // Cannot access sub before initialization
// console.log(mul(10, 20)); // Cannot access mul before initialization
console.log(div(20, 10)); // undefined(20,10) // div is not a function

// function
function add(a, b) {
    return a + b;
}

// function expression
const sub = function (a, b) {
    return a - b;
}

// arrow function
const mul = (a, b) => a * b;

var div = function (a, b) {
    return a / b;
}