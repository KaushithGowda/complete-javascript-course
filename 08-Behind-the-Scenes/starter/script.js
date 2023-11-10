'use strict';

// 95. Hoisting and TDZ in Practise

// console.log(x); // undefined
// console.log(y); // Cannot access y before initialization
// console.log(z); // Cannot access z before initialization

var x = 10;
let y = 20;
const z = 30;

// console.log(add(10, 20));
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
    // print();
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
// console.log(window.a === a);

// 96. The this keyword
// console.log(this);

// Using this keyword with strict mode (else it would have been global window object)
const calcFun = function () {
    console.log(this); // undefined 
}

// calcFun();

// Arrow this keyword
const calcArrow = () => {
    console.log(this); // lexical this keyword (Uses surrounding this keyword)
}

// calcArrow();

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

// console.log('jonas fun: ', jonas.calcAge);

// Borrowing the method from jonas object
matt.calcAge = jonas.calcAge;

// Now since the object calling the method is matt this keyword will point to matt
// matt.calcAge(2023);

// this keyword is undefined here because there is no owner object for f
const f = jonas.calcAge;
// f();

// 98. Regular functions vs Arrow functions
const joey = {
    firstName: 'joey',
    year: 1980,
    calcAge: function (birthYear) {
        console.log('this: ', this);
        console.log('Inside fun: ', birthYear - this.year);
    },
    // Here the this keyword is pointing to global window object since this arrow function and that's one of the reason we are not supposed to use var firstName. Because, if we have firstName using var it would add a property as firstName
    // Do not use arrow function as a method
    greet: () => console.log(`hey ${this.firstName}`),
}
// joey.greet();

const jen = {
    year: 1995,
    calcAge: function (birthYear) {
        // console.log('this: ', this);

        const isMillennial = function () {
            if (this) {
                console.log(this); // undefined 
                if (this.year >= 1989 && this.year <= 1996) {
                    console.log('You are a millennial');
                }
            }
        }
        isMillennial(); // As per rules this keyword should be undefined because this is a simple function call
    }
}

jen.calcAge(2023);

const pheobe = {
    year: 1995,
    calcAge: function (birthYear) {
        // console.log('this: ', this);

        // Solution 1
        const self = this;
        const isMillennial = function () {
            if (self.year >= 1989 && self.year <= 1996) {
                console.log('Pheobe you are a millennial');
            }
        }
        isMillennial();
    }
}

pheobe.calcAge(2023);

const ross = {
    year: 1995,
    calcAge: function (birthYear) {
        // console.log('this: ', this);

        // Solution 2
        const isMillennial = () => {
            if (this.year >= 1989 && this.year <= 1996) {
                console.log('Ross you are a millennial');
            }
        }
        isMillennial(); // Since, the function call is happening using arrow function the this keyword is pointing to surrounding function lexical this 
    }
}

ross.calcAge(2023);

const sample = function (a, b) {
    console.log(arguments); // Array of arguments Supports only in normal function calls Not supported in Arrow functions
    return a - b;
}

sample(2, 3);
sample(2, 3, 4, 5);

const example = (a, b) => {
    // console.log(arguments); // Arguments is not defined
    return a + b;
}

example(10, 11, 12);

// 99. Primitives vs Objects(Primitive vs Reference Types)

const me = {
    name: 'jonas',
    age: 19
}
const friend = me;
friend.age = 21;
friend.address = 'bengaluru';
console.log(friend);
console.log(me);

// 100. Primitives vs Objects in Practise

// Copying objects
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob']
};

// Object.assign(targetObj, FromObj) This can copy the object on first level basis and on second level it the objects point to same ref
const jessicaCopy = Object.assign({}, jessica);
jessicaCopy.lastName = 'Smith';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('Jake');

console.log('Before Marriage:', jessica);
console.log('After Marriage:', jessicaCopy);