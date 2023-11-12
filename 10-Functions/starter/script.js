'use strict';

// 128. DEFAULT PARAMETERS

const bookings = [];

// ES6
// The order of placing arguments must be appropriate
// const createBooking = function (flightNum, price = 10 * numPassengeres, numPassengeres = 1) { // This is an inappropriate other

const createBooking = function (flightNum, numPassengeres = 1, price = 10 * numPassengeres) {
    // ES5
    // numPassengeres = numPassengeres || 1;
    // price = price || 10;

    const booking = {
        flightNum,
        numPassengeres,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('FN009');
createBooking('FN009', 10, 100);
// We have to pass all arguments if one is dependent on other else calculations will get fucked up
createBooking('FN009', 1000);

// 129. How Passing Arguments Works: Value vs Reference

const flight = 'LH234';
const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 987654321,
};

const checkIn = function (flightNum, passenger) {
    // This is a copy of the primitive variable. So, the original flight won't change its value
    flightNum = 'LH899';
    // The object values are changed Since we are sending the same reference to the function
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 987654321) {
        alert('Checked In');
    } else {
        alert('Wrong Password');
    }
}

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// The above code is same as doing..
const flightNum = flight;
const passenger = jonas;

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 1000);
}

// newPassport(jonas);
// checkIn(flight, jonas);

// 131. Functions accepting Callback functions

// First Order function
const dating = (str1, str2) => {
    return `${str1} and ${str2} started dating`;
}

// Higher order function
const friends = (str1, str2, fn) => {
    console.log(`${str1} and ${str2} were friends. But later ${dating(str1, str2)}`);
}

friends('chander', 'monica', dating);

// 132. Functions Returning Functions

const greet = (greeting) => {
    return (name) => {
        console.log(`${greeting} ${name}`);
    };
};

// const greet = greeting => name => console.log(`${greeting} ${name}`);

greet('Hello')('Jonas');

// 133. The call and apply methods

const kingfisher = {
    airline: 'The Kingfisher Air Lines',
    iataCode: 'KF',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}-${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}-${flightNum}`, name });
    }
};

kingfisher.book(101, 'KAUSHIK');
kingfisher.book(102, 'LUCKEY');

// console.log(kingfisher.bookings);

const indigo = {
    airline: 'The Indigo Airlines',
    iataCode: 'IN',
    bookings: [],
}

const book = kingfisher.book;

// this keyword will be undefined. Since, the way we are calling the function using a simple function call
// book(123, 'JOHN');

// Call method
book.call(indigo, 23, 'Mark');
// console.log(indigo);

const flightData = [45, 'Jake'];
// Apply method
book.apply(indigo, flightData);

// Better Way
book.call(indigo, ...flightData);

// 134. The bind method 

// This method would return a function

const bookIG = book.bind(indigo);
const bookKF = book.bind(kingfisher);

bookIG(456, 'Rohit');
bookKF(18, 'Kohli');

const bookIG77 = book.bind(indigo, 77);
bookIG77('Gill');

// Event Listensers
kingfisher.flights = 100;
kingfisher.buyFlight = function () {
    // console.log(this); // Points to the selected element
    console.log(this.flights);
    this.flights++;
};

document.querySelector('.buy').addEventListener('click', kingfisher.buyFlight.bind(kingfisher));

// Partial Application
const tax = (rate, value) => value * rate / 100;
console.log(tax(15, 1000));

const tax18 = tax.bind(null, 18);
console.log(tax18(100));