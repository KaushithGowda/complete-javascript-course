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