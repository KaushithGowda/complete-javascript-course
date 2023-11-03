'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = "Js is here!";

document.querySelector('.score').textContent = 13;

document.querySelector('.guess').value = 10;
*/

document.querySelector('.check').addEventListener('click', () => {
    const guess = document.querySelector('.guess').value;
    console.log(guess);
    if (!guess) {
        document.querySelector('.message').textContent = 'Enter a number⚠️';
    }
})