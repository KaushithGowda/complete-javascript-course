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