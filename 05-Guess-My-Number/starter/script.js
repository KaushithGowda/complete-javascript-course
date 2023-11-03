'use strict';

/*
// 72. Selecting and Manipulating Elements
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = "Js is here!";

document.querySelector('.score').textContent = 13;

document.querySelector('.guess').value = 10;
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.number').textContent = secretNumber;

let score = 20;

// 73. Handling click events
document.querySelector('.check').addEventListener('click', () => {
    const guess = document.querySelector('.guess').value;

    if (!guess) {
        document.querySelector('.message').textContent = 'Enter a number⚠️';
    }

    // 74. Implenting the game logic
    // 75. Manipulating CSS Styles
    if (Number(guess) === secretNumber) {
        document.querySelector('.message').textContent = 'You are goddamn right ✅';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Think a smaller number 📉';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost sucker!';
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Think a bigger number 📈';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost sucker!';
            document.querySelector('.score').textContent = 0;
        }
    }
});