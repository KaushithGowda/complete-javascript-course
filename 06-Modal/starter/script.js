'use strict';

// 80. Working with classes
const modalBtn = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');

function open() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

function close() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < modalBtn.length; i++)
    modalBtn[i].addEventListener('click', open);

closeBtn.addEventListener('click', close);
overlay.addEventListener('click', close);