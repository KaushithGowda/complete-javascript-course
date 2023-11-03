// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// Problem1: In an array of temperatures get temp amplitude. THe array will also contain error temps.

// 4 steps process

// 1. Understanding the problem 100% and question the problem to have a clear picture
// What the error temps look like?  What data type will the error temp?

// 2. Divide and Conquer the problem.
// Identify the error message and ignore them
// Find max temp in the array.
// Find min temp in the array.
// Return the amplitude by subtracting max and min temp.

const sample = [10, 15, 2, 12, 5, -10, -12, -8, 'error'];

function calcAmp(sample) {
    let max = sample[0];
    let min = sample[0];
    for (let i = 0; i < sample.length; i++) {
        if (typeof sample[i] !== 'number') continue;
        if (sample[i] > max) max = sample[i];
        if (sample[i] < min) min = sample[i];
    }
    return max - min;
}

const tempAmp = calcAmp(sample);
console.log('The temp amplitude:', tempAmp);

// Problem2: Using 2 arrays of temperatures get temp amplitude. THe array will also contain error temps.

const sample1 = [10, 15, 2, 12, 5, -10, -12, -8, 'error'];
const sample2 = [13, 14, 2, 11, 2, -11, -18, -5, 'error'];

function calcAmpTwoArray(sample1, sample2) {
    const sample3 = sample1.concat(sample2);
    let max = sample3[0];
    let min = sample3[0];
    for (let i = 0; i < sample3.length; i++) {
        if (typeof sample3[i] !== 'number') continue;
        if (sample3[i] > max) max = sample3[i];
        if (sample3[i] < min) min = sample3[i];
    }
    return max - min;
}

const tempAmpTwoArray = calcAmpTwoArray(sample1, sample2);
console.log('The temp amplitude:', tempAmpTwoArray);

const thermoArray = [17, 21, 23];

function printForecast(arry) {
    let finalString = '...';
    let day = 1;
    for (let i = 0; i < arry.length; i++) {
        let string = '';
        day === 1 ? string = `${arry[i]} in ${day} day...` : string = `${arry[i]} in ${day} days...`
        finalString = finalString + string;
        day++;
    }
    console.log(finalString);
}

printForecast(thermoArray);