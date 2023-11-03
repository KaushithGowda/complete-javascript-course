'use strict';

/*
// 72. Selecting and Manipulating Elements
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = "Js is here!";

document.querySelector('.score').textContent = 13;

document.querySelector('.guess').value = 10;
*/
let secretNumber;
let highScore = 0;
function changeNumber() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
}
changeNumber();

// document.querySelector('.number').textContent = secretNumber;

let score = 20;

// 73. Handling click events
document.querySelector('.check').addEventListener('click', () => {
    const guess = document.querySelector('.guess').value;

    if (!guess) {
        document.querySelector('.message').textContent = 'Enter a number⚠️';
    }

    // 74. Implenting the game logic
    if (Number(guess) === secretNumber) {
        document.querySelector('.message').textContent = 'You are goddamn right ✅';
        // 75. Manipulating CSS Styles
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        // 77. Implementing High scores
        if (score > highScore) {
            document.querySelector('.highscore').textContent = score;
            highScore = score;
        }
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

// 76. Coding challenge #1
document.querySelector('.again').addEventListener('click', () => {
    document.querySelector('.message').textContent = 'Start guessing...';
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    changeNumber();
    document.querySelector('.number').textContent = '?';
})