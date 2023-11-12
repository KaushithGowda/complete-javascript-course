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