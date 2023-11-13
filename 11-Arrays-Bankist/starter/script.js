'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// 142. Simple Array methods

let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

// slice
// does not mutate the current array
console.log('arr.slice(3):', arr.slice(3)); // returns an array
console.log('arr.slice(3,5):', arr.slice(3, 5)); // returns an array
console.log('arr.slice(2,-1):', arr.slice(2, -1)); // returns an array
console.log('slice:', arr);

// splice 
// mutates the current array
console.log('arr.splice(3):', arr.splice(2, 5));
console.log('splice:', arr);

// reverse
arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
console.log('reverse', arr.reverse());

// concat
// does not mutate the current array

let a = ['a', 'b', 'c'];
let b = ['d', 'e', 'f'];
console.log('concat:', a.concat(b));

// join
console.log('join', a.join('-'));

// 144. Looping Arrays: forEach

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// forOf loop

for (const [i, movement] of movements.entries()) {
  if (movement > 0) console.log(`Transaction ${i}: You deposited ${movement} from your account!`);
  else console.log(`Transaction ${i}: You withdrew ${Math.abs(movement)} from your account!`);
}

console.log(`==================================================================================`);

// forEach loop
// In forEach loop break or continue won't work
movements.forEach((movement, i, arr) => {
  if (movement > 0) console.log(`Transaction ${i}: You deposited ${movement} from your account!`);
  else console.log(`Transaction ${i}: You withdrew ${Math.abs(movement)} from your account!`);
});

// 150. The Map Method

const usd = [1, 5, 10, 15, 20, 25, 30];

const rupees = usd.map((dollar, index) => {
  return dollar * 85;
})

console.log(rupees);