'use strict';

// 207. Constructor functions and the new Operator

const User = function (name, phone) {
    this.name = name;
    this.phone = phone;
}

// 4 steps in creating a function using new Operator
// 1. New {} (obj) is created
// 2. function is called. this keyword points to {} (obj)
// 3. {} (obj) is linked to prototype
// 4. function automatically returns {}

const bob = new User('bob', 9998877665);
console.log(bob);
console.log(bob instanceof User); // true