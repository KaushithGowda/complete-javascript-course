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
// console.log(div(20, 10)); // undefined(20,10) // div is not a function

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

if (!calc) {
    print();
}

var calc = 10;

function print() {
    console.log('hey there!');
}

// Window is the global object of JS in browser

var a = 1;
let b = 3;
const c = 2;

// var variable will create a property on the global window object
console.log(window.a === a);

// 96. The this Leyword
console.log(this);

// Using this keyword with strict mode (else it would have been global window object)
const calcFun = function () {
    console.log(this); // undefined 
}

calcFun();

// Arrow this keyword
const calcArrow = () => {
    console.log(this); // lexical this keyword (Uses surrounding this keyword)
}

calcArrow();

const jonas = {
    year: 1980,
    calcAge: function (birthYear) {
        console.log('this: ', this);
        console.log('Inside fun: ', birthYear - this.year);
    }
}

// this keyword is pointing to the object calling the function which has the this keyboard
// jonas.calcAge(2023);

const matt = {
    year: 1990
}

console.log('jonas fun: ', jonas.calcAge);

// Borrowing the method from jonas object
matt.calcAge = jonas.calcAge;

// Now since the object calling the method is matt this keyword will point to matt
matt.calcAge(2023);

// this keyword is undefined here because there is no owner object for f
const f = jonas.calcAge;
f();