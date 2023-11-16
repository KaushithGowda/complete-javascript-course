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
    // The constructor method is called by new operator when an instance of the class is created. It is mandatory in the parent class. But can be omitted in the child class when we want same properties and methods as parent class
    constructor(name, year) {
        this.year = year;
        this.name = name;
        this.transactions = [200, 100, 30, 20, 100, 300];
    }

    calcAge() {
        console.log('calcAge inside Person class:', 2023 - this.year);
    }

    // 214. Setters and Getters
    get lastTransaction() {
        console.log('getter in the person class:', this.transactions.slice(-1).pop());
    }

    set lastTransaction(item) {
        this.transactions.push(item);
        console.log(james);
    }
}

const james = new Person('james', 1990);
james.calcAge();
console.log(james.__proto__);
console.log(james.__proto__ === Person.prototype);

// Note 1. Classes are not hoisted(We cannot use it before declaring them)
// Note 2. Classes are first class citizens(We can return a class from a function, send it as a param to a function)
// Note 3. Classses are executed in strict mode(Even if we are not using strict mode)

james.lastTransaction;
james.lastTransaction = 10;

class Account {
    constructor(fullName) {
        this.fullName = fullName;
    }

    set fullName(name) {
        this._fullName = name;
    }

    // 215. Static methods
    static hey() {
        console.log('Hey there!');
        console.log(this); // this will point to the constructor function. Since, it is the owner of the function which is getting called
    }
}

const monica = new Account('Monica');
console.log({ monica });
Account.hey(); // This method is not inherited into the instances created using this class

// function way of writing a static method
Account.hello = function () {
    console.log(this);
    console.log('Hello there!');
}
Account.hello();
// monica.hey(); // This is not available in the instance
// monica.hello(); // This is not available in the instance

// 216. Objects.create

const Player = {
    init(name, year) {
        this.name = name;
        this.year = year;
    },
    calcAge() {
        this.birthYear = 2023 - this.year;
    }
};

const virat = Object.create(Player);
virat.init('virat', 1992);
virat.calcAge();
console.log(virat);
console.log(virat.__proto__);
console.log(virat.__proto__);

// 218. Inheritance between Classes": Constructor functions

const Human = function (name, year) {
    this.name = name;
    this.year = year;
}

Human.prototype.calcAge = function () {
    console.log('Age:', 2023 - this.year);
}

const Student = function (name, year, course) {
    Human.call(this, name, year);
    this.course = course;
}

// Linking prototypes
// We have to link the prototype before we write methods into Student prototype. Else, object.create will return {} which will overwrite whatever methods are present in Student.prototype.
Student.prototype = Object.create(Human.prototype);
// Since, we are setting prototype of student to Human using Object.create . The Constructor of student would be pointing to Human.
Student.prototype.constructor = Student;

console.log(Student.prototype.constructor);

Student.prototype.greet = function () {
    console.log('Hey there! mate');
}

const jack = new Student('jack', 1980, 'CS');
console.log('Student proto:', jack.__proto__);
console.log('Human proto:', jack.__proto__.__proto__);

console.log(jack);
jack.calcAge();
jack.greet();

console.log(jack instanceof Student);
console.log(jack instanceof Human);
console.log(jack instanceof Object);

class Father {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    responsibility() {
        if ((2023 - this.year) > 25) {
            console.log('The Responsibility of home is yours son');
        }
    }
}

class Son extends Father {
    constructor(name, year,) {
        // It is mandatory to have super method call before accessing this
        // We have to do this because firstly the constructor of parent class needs to happen first. So, the properties and methods in that are present in parent class can we stored or executed and on those properties and methods we can add some more properties and methods
        // Call to parent(super) class(necessary with extend). Needs to happen before accesing this
        super('name', 1997);
        console.log(this);
    }

    thanks() {
        console.log('Thanks dad! I will take care of the family from here on.');
    }
}

const son = new Son('Koushik', 1997);
son.thanks();
son.responsibility();

// 221. Inheritance Between "Classes": Object.create
const AllRounder = {
    calcAge() {
        console.log(2023 - this.year);
    },
    init(name, year) {
        this.name = name;
        this.year = year;
    },
}

const batter = Object.create(AllRounder);
batter.init = function (name, year, course) {
    AllRounder.init.call(this, name, year);
    this.course = course;
}

batter.intro = function () {
    console.log('Hey there! I am', this.name, 'from', this.course);
}

const kohli = Object.create(batter);
console.log({ kohli });
kohli.init('virat', 1992, 'cricket');
kohli.intro();
kohli.calcAge();

// 220. Encapsulation: Protected Properties and Methods:

// Encapsulation is needed to the data inside the class from being manipulated by external code and being able to cahnge implentation of the code inside the class.

class Something {
    constructor(p1, p2, p3) {
        this.p1 = p1;

        // protected property 
        // This is a dev way to say to other dev that this is encapsulated. So, this property should not be changed from external code.
        this._arr = [];
        this._p2 = p2;
        // Instance property avialable on created object
        // This is just like public field which will be avialable for all the objects. But this value will be different to different objects depending on the parameter which the consrtuctor receives
        this.p3 = p3;
    }

    // public method
    method1() {
        // does something
    }

    // protected method
    _method1() {
        // does something
    }
}

// 221. Encapsulation: Private Class Fields and Methods:

// 1. private method
// 2. public method
// 3. private fields
// 4. public fields

// Field is like a property which will be present on all instances. That's why we call this a public instance field.

class SomethingElse {

    // public fields(These will be present on instances and not on prototypes)
    str = 'string';
    _arr = [];

    // private fields
    #someField = [];

    // static public field (Only avialable on the class and not on instances)
    static str = 'static'

    constructor(p1, p2, p3) {
        this.p1 = p1;

        this._arr = [];
        this._p2 = p2;
        this.p3 = p3;
        console.log(p1, p2, p3);
    }

    // public method
    // The methods will be added to the prototype
    method1() {
        // does something
    }

    // protected method
    _method1() {
        // does something
    }

    // private method
    #method3() {
        // does something
    }
}

const se = new SomethingElse('1', '2', '3');
console.log(se);
se._method1();

// private fields are not accessible outside the class
// console.log(se.#someField);

// We can write a method to get or set the private field value but that would be a internal modification to the private field
// Using this keyword we can access the private fields

// Property '#method3' is not accessible outside class 'SomethingElse' because it has a private identifier.
// se.#method3()

// 225. Chaining Methods
class SavingBankAccount {
    constructor(name, balence) {
        this.balence = balence;
        this.name = name;
    }

    deposit(val) {
        this.balence += val;
        return this;
    }

    withdraw(val) {
        if (this.balence > val) this.balence -= val;
        else console.log(`You are broke!`);
        return this;
    }

    // static method
    // static public method(Only avialable on the class and not on instances)
    static status() {
        console.log('I am static method. Im avail only for classes and not for instances');
    }
};

const shady = new SavingBankAccount('shady', 50000);
console.log(shady.balence);
shady.withdraw(5000);
console.log(shady.balence);
shady.deposit(10000);
console.log(shady.balence);
SavingBankAccount.status();