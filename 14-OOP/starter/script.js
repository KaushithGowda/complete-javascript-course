'use strict';

// 207. Constructor functions and the new Operator

const User = function (name, phone, year) {
    this.name = name;
    this.phone = phone;
    this.year = year;
}

// 4 steps in creating a function using new Operator
// 1. New {} (obj) is created
// 2. function is called. this keyword points to {} (obj)
// 3. {} (obj) is linked to prototype (In this step the a property called __proto__ is attached to the object and is linked to the prototype function)
// 4. function automatically returns {}

const bob = new User('bob', 9998877665, 1975);
const jake = new User('jake', 9998877665, 1980);

console.log(bob);
console.log(bob instanceof User); // true

// 209. Prototypes

// Each and every function in JavaScript automatically has a property called prototype and that includes, of course, constructor functions.
// Any object always has access to the methods and properties from its prototype.

// This is the prototype of all the objects which are created using this function
User.prototype.calcAge = function (year) {
    return 2023 - this.year;
};

console.log('bob.__proto__ :', bob.__proto__);
console.log(bob.__proto__ === User.prototype); // true

// bobAge method(method inside the prototype) call using the object 
console.log({ bob });
console.log('bobAge:', bob.calcAge());
console.log(User.prototype.isPrototypeOf(bob));
console.log(User.prototype.isPrototypeOf(jake));

User.prototype.job = 'Corporate';

console.log(bob.job); // Corporate
console.log(bob.hasOwnProperty('name')); // true
console.log(bob.hasOwnProperty('job')); // false

// 211. Prototypal In-heritance on Built-in Objects

// Object.prototype is top of the prototype chain.
console.log(bob.__proto__.__proto__); // Object
console.log(bob.__proto__.__proto__.__proto__); // null Since, Object is the top of the prototype chain

console.log(bob.__proto__.constructor); // User()
console.log(bob.__proto__.__proto__.constructor); // Object()

// Array is a type of object
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9] // new Array()
console.log(arr.__proto__); // Array()

const h1 = document.querySelector('h1');
console.dir(h1); // object

console.dir(x => x + 1); // object

// 213. ES6 Classes

// class expression
// const Person = class {
// }

// class declaration
class Person {
    constructor(name, year) {
        this.year = year;
        this.name = name;
    }

    calcAge() {
        console.log('calcAge inside Person class:', 2023 - this.year);
    }
}

const james = new Person('james', 1990);
james.calcAge();
console.log(james.__proto__);
console.log(james.__proto__ === Person.prototype);

// Note 1. Classes are not hoisted(We cannot use it before declaring them)
// Note 2. Classes are first class citizens(We can return a class from a function, send it as a param to a function)
// Note 3. Classses are executed in strict mode(Even if we are not using strict mode)