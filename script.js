'use strict';

const _account1 = {
  owner: 'Mihail Gheorghe',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'en-UK', // de-DE
};

const _account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const _accounts = [_account1, _account2];

//////////////////// Previous Data //////////////////
////////////////////////////////////////////////////

const account2 = {
  owner: 'Alex Doe',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Jane Doe',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Kanye West',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account2, account3, account4];

//////////////////// Previous Data //////////////////
////////////////////////////////////////////////////

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

//this method goes through the contents of an objects and sets their data into the movements tab

//console.log(containerMovements.innerHTML);

//First Exercise here
// const Julia = [3, 5, 6, 2, 12, 7];
// const Kate = [4, 1, 15, 8, 3, 8];

// const checkDogs = function (dogsJulie, dogsKate) {
//   const newArray1 = dogsJulie.slice(2, 4);
//   const newArray2 = dogsKate.slice(2, 4);
//   console.log(newArray1, newArray2);

//   const dataList = newArray1.concat(newArray2);
//   dataList.forEach(function (val, i) {
//     val >= 3
//       ? console.log('This dog is an adult')
//       : console.log('This dog is not an adult');
//   });
// };

//checkDogs(Julia, Kate);
// More Data //

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = [1, 2, 3, 4, 5, 6];
// //Take a slice of the array
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(1, -1));
// console.log([...arr]);

// //SPLICE METHOD extracts the elements from the original Array
// //console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// //take 2 elements from the position 0
// console.log(arr.splice(0, 2));
// //Yep reverse the array
// console.log(arr.reverse()); // This mutates the original array from now onwards

// const arr2 = [4, 5, 6, 7, 8];
// //brings two arrays together
// let together = arr.concat(arr2);
// console.log(together);

// //Another way to do it is with the spreader operator
// const bring = [...arr, ...arr2];
// console.log(bring);

//Join Method as well
//const joinArr = bring.join(''); //Joins the array to create a string or number with a special character between them
//console.log(joinArr);

//New Method for arrays
// const newArr = [23, 11, 65];
// console.log(newArr.at(0));

// //simpler way to find an element in the index of an array
// console.log(newArr.at(newArr.length - 1));
// //Or finding the last element with -1 method
// console.log(newArr.at(-1));

// //way to check the index and element
// for (var [i, movement] of movements.entries()) {
//   i > 0 ? console.log(i, movement) : console.log('Cant do it');
// }

//another way to make a foreach special for arrays
//the parameter within the function can acts as the element index
//simply two ways to do it
// movements.forEach(function (movement, index) {
//   movement > 0
//     ? console.log('Money in', movement, index)
//     : console.log('Cant do it');
// });

//foreach with a Map
// currencies.forEach(function (value, key, Map) {
//   console.log(`${value} , ${key} , ${Map}`);
// });

//currencies with a Set

// const currenciesUnique = new Set(['USD', 'EURO', 'GBP', 'EURO', 'USD']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, key, Map) {
//   console.log(`${value} , ${key} , ${Map}`);
// });

//DOM manipulation technique for arrays
//DATA tRANSFORMATIONS WITH MAP , FILTER AND REDUCE.

const eurToUsd = 1.1;

//map method , basically maps every element in the array, with that you can do stuff like change it apply an interest rate etc....
// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

///////////
//Shorter version with arrow function to Map an array
// const callBack = movements.map(map => map * eurToUsd);
// console.log(movementsUSD);

movements.map((mov, i) => {
  mov > 0
    ? console.log(`You deposited ${i + 1}: ${mov} €`)
    : console.log(`You withdrew ${i + 1}: ${mov} €`);
});

//function to map each object inside the array and add another parameter
/////////////////////////////////////////////////////////

const formatDate = function (date, locale) {
  /////updating Date pretty simple , create variables and insert them into the HTML

  const returnDates = (date1, date2) =>
    Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

  const daysPassed = returnDates(new Date(), date);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();

    // return `${day} / ${month} / ${year}`;

    return new Intl.DateTimeFormat(locale).format(date);
  }
};

const formatCurr = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  //sorting the array inside the display movements function
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const transactionType = mov > 0 ? `deposit` : `withdrawal`;

    //Date formating
    const date = new Date(acc.movementsDates[i]);
    const dispalyDate = formatDate(date, acc.locale);
    //Date formating

    //currency Converting
    const formattedMov = formatCurr(mov, acc.locale, acc.currency);
    //currency converting

    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${transactionType}">${
      i + 1
    } ${transactionType}</div>
          <div class="movements__date">${dispalyDate}</div>
          <div class="movements__value">${formattedMov}</div>
        </div>`;

    //this method helps us introduce the new HTML back to the actual HTML file
    //first parameter is the position , second is the variable
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const createUsername = function (accounts) {
  accounts.forEach(function (acc) {
    //acc.username created as a new prop in every object
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};

createUsername(_accounts);

const calcDisplaySummary = function (acc) {
  //Refactoring using the INTL API
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCurr(incomes, acc.locale, acc.currency);

  //Refactoring using the INTL API
  const summary = acc.movements
    .filter(mov => mov <= 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCurr(summary, acc.locale, acc.currency);

  //Refactoring using the INTL API
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, mov) => acc + mov, 0);

  labelSumInterest.textContent = formatCurr(interest, acc.locale, acc.currency);
};

const calcPrintBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, curr) => acc + curr, 0);

  labelBalance.textContent = formatCurr(acc.balance, acc.locale, acc.currency);
};

const updateUI = function (acc) {
  calcDisplaySummary(acc);
  calcPrintBalance(acc);
  displayMovements(acc);
};

/////////////////////Internationalization//////////////////
//containerApp.style.opacity = 100;

///////////////////////////////////////////////////////////
let currAccount, timer;

//Logout function
const logOutTimer = function () {
  const tick = () => {
    //formula to create the minutes and seconds for a clock
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    labelTimer.textContent = `${min}:${sec}`;
    //in each call back print the reminaing time to the UI and when its zero stop Timer, log out user
    if (time === 0) {
      clearInterval(timer);
      containerApp.style.opacity = 0;
      labelWelcome.textContent = `Log in to get started`;
    }
    time--;
  };
  //holds the amount of time for logut
  let time = 300;
  //call the timer every second
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

btnLogin.addEventListener('click', function (e) {
  //this prevent method works in a way to stop from refreshing the page because of the form button
  e.preventDefault();

  currAccount = _accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  //chaining method to check if an object exists then check
  if (currAccount?.pin === Number(inputLoginPin.value)) {
    //display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${currAccount.owner}!`;

    containerApp.style.opacity = 100;
    //calculate summary and movements
    //clear input fields here
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currAccount);
    //Start logout Time


    if (timer) {
      clearInterval(timer);
    }
    timer = logOutTimer();

    ////// Bellow using the API INTERNATIONALIZATION of Javascript/////////////
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric', //numeric , long , 2-digit these are the formats you can set
      year: 'numeric',
    };

    labelDate.textContent = new Intl.DateTimeFormat(
      currAccount.locale,
      options
    ).format(now);

    /////////Bello Using Date function in Javascript////////
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day} / ${month} / ${year}, ${hour}:${min}`;
  } else {
    alert('Wrong username or Password');
  }
});

//TRANSFERING MONEY TO ANOTHER ACCOUNT

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = _accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    receiverAccount &&
    currAccount.balance >= amount &&
    receiverAccount?.username !== currAccount.username
  ) {
    //Doing the transfer for it
    currAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);

    //Adding transfer dates
    currAccount.movementsDates.push(new Date());
    receiverAccount.movementsDates.push(new Date());

    //UI elements Updateing
    updateUI(currAccount);

    //reset Timer
    clearInterval(timer);
    timer = logOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const loan = Math.floor(inputLoanAmount.value);

  if (loan > 0 && currAccount.movements.some(mov => mov >= loan / 10)) {
    //add Movement
    currAccount.movementsDates.push(new Date().toString());
    //add Loan Date
    currAccount.movements.push(loan);
    //update UI
    updateUI(currAccount);
    //reset timer
    clearInterval(timer);
    timer = logOutTimer();
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  const username = inputCloseUsername.value;
  const pin = Number(inputClosePin.value);

  if (
    username === currAccount.username &&
    pin === currAccount.pin &&
    currAccount
  ) {
    const index = _accounts.findIndex(
      acc => acc.username === username && acc.pin === pin
    );

    //Splice method also has a parameter for deleting a number of elements and adding a number back at the end.
    _accounts.splice(index, 1);
    containerApp.style.opacity = 0;
    inputTransferAmount.value = inputTransferTo.value = '';
    labelWelcome.textContent = `Log in to get started`;
  }
});

let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currAccount, !sorted);
  sorted = !sorted;
});

///////////////////////////////////////////////////////////

//Simple way to do it, when doing this it filters all the elements with a certain condition above 0 , a number, a string
//const deposit = movements.filter(mov => mov > 0);

// console.log(deposit);

// //Same way of writing the filter method but easier and shorter
// const depositFor = [];
// for (var el of movements) if (el > 0) depositFor.push(el);

//Basically what to take from this lecture about Mapping , Filter and Reduce
//You can use multuple methods for strings arrays as long as the context is well respected like in the example at Line 196 by creating strings and using the array the map for the first elements and Joining them together. Or Filtering certain elements and pushing them or adding them together , turing them into a string etc........
// const withdrawals = movements.filter(mov => mov < 0);
// console.log('This is a test' + withdrawals);

//Reduce method for arrays
//Used to Boil down all elements in an array to a single element s

//Accumulator in the function section is like a snowball it keeps growing with all elements
// const balance = movements.reduce((acc, curr) => acc + curr);
//last value after the function is the initial value of the accumulator before starting //OPTIONAL//);

//Same way of writing it but with a for loop , these functions again help us narrow down a for loop or something similar.
// let initialBalance = 0;
// for (var mov of movements) {
//   initialBalance += mov;
//   console.log(initialBalance);
// }

//MAXIMUM VALUE

// const maxValue = movements.reduce((acc, mov) => {
//   if (acc > mov) {
//     return acc;
//   } else {
//     return mov;
//   }
// }, movements[0]);

// //easy way to write these without an if statement or else statement to make it longer without a reason.
// const maxValue2 = movements.reduce(
//   (acc, mov) => (acc > mov ? acc : mov),
//   movements[0]
// );

// console.log(maxValue2);

//Coding challenge number 2

const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const calculateAverageHumanAge = arr =>
  arr
    .map(age => (age <= 2 ? (age = age * 2) : (age = 16 + arr * 4)))
    .filter(age => age <= 18)
    .reduce((acc, mov) => acc + mov / arr.length, arr[0]);

console.log(calculateAverageHumanAge(data2));

//Chaining Methods Examples :

const totalUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalUSD);

//Find method to retrieve an element of an array based on the condition just like the other methods

// const negativeWith = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(negativeWith);

// const account = accounts.find(acc => acc.owner === 'Mihail Gheorghe');

// Some method for Array

const anyDeposit = movements.some(mov => mov > 0);
console.log(anyDeposit);

//Every method for Array is similar but Every returns true if all elements pass the test in the function

const checking = account4.movements.every(mov => mov > 0);
console.log(checking);

//Flat and Flat map method

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
//flattens an array ,, basically make it on dimensional
console.log(arr.flat());

const arrDeep = [
  [
    [1, [2, 3]],
    [4, 5, 6],
  ],
  7,
  8,
];
console.log(arrDeep.flat(4));

const total1 = accounts.map(mov => mov.movements);

const accountMov = total1.flat();
//way to access the whole data base of Transactions

const total = accountMov.reduce((acc, mov) => acc + mov, 0);
console.log(total);

//Sorting Algorithm for Arrays

const owners = ['Jonas', 'Zach', 'Martha'];
console.log(owners.sort());

//with sorting we have to think like there are 2 consecutive numbers
movements.sort((a, b) => (a > b ? 1 : -1));

//or we can write it like this

movements.sort((a, b) => b - a);
console.log(movements);

const x = new Array(7);
//Fill method fills all the elements in the array with a single elements , you can also specifiy the starting index
x.fill(1);
console.log(x);

//Array from method same as fill , declaring the length and the elements inside the array;
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

//mapping each element with the Array.From method to declare the size and each element at index;
const z = Array.from({ length: 8 }, (curr, i) => i + 1);
console.log(z);

//Array method on the current transaction to get a list of all the elements in the HTML
labelBalance.addEventListener('click', function () {
  //this functions is a way to create an array of all the querry of type 'movements'and we change it to a number and get ride of the Euro sign.
  const movementUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );

  //spread
  const movement2 = [
    ...document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', '')),
  ];
});

/*Which arrays TO choose , studied 23 methods for arrays

1. MAP , when you want to map every elements in an array to something different. 

2.reduce , reduces the array to one element based on a condition

3. filter , changes the array based on the filter value returns all those values back 

4.Array.from() creates a new array of a set array size , and with each elements in the index based on the condition

5. Sort , sorts the array even if its strings or numbers

6.Flat , makes the array on dimensional .

7. Some and Every, are methods that return true or false if one or EVERY element in the array meets a condition 

8. ForEACH , just looping through thefunction 

9. Concat, its basically the same as the spreader operator but it creates and array from 2 array , 

10. Slice , which makes a shallow copy of the array and Splice modifies the original array if you want to take out elements. 

11. Array index using the AT metheod to select the index; 

12. Join . used to join all the elements in the array as a string 

13. Pop , push , unshift change the array size , push and unshift adds an element at the beginning and the end

Pop , takes an element from the end of the array, Shift takes an element from the start

14. Reverse , basically changes the array from end to start...

15 Fill , fills the array with elements but the Array.from is better to create and fill an array because of its functionality

16. IndexOf when we want to find a specific value and 

17. FindIndex to check a condition for each element until we find the first element that passes said condition 

18. finds the first element that passes a conditioon withing an array

19. Includes returns true if an element its found in the array. 
*/

//Exercise with arrays , a bit of working again

const bankSum = accounts
  .map(acc => acc.movements)
  .flat()
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);

console.log(bankSum);

//The ++ operator adds the number itself plus 1 if its 0
const numDeposits = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => (mov >= 1000 ? acc + 1 : acc), 0);

console.log(accounts.flatMap(acc => acc.movements).filter(mov => mov >= 1000));

console.log(numDeposits);

//This is a best way to make store into two operators
const { deposit, withdrawals } = _accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sum, curr) => {
      // curr > 0 ? (sum.deposit += curr) : (sum.withdrawals += curr);
      sum[curr > 0 ? 'deposit' : 'withdrawals'] += curr;
      return sum;
    },
    { deposit: 0, withdrawals: 0 }
  );

console.log(deposit, withdrawals);

// another Example

const example = function (Title) {
  const exception = ['a', 'an', 'the', 'or', 'on', 'in', 'with'];

  const capitulize = str => str[0].toUpperCase() + str.slice(1);

  const titleCase = Title.toLowerCase()
    .split(' ')
    .map(word => (exception.includes(word) ? word : capitulize(word)))
    .join(' ');
  console.log(titleCase);
};

example('tHIS IS A NICE TITLE');
example('I AM WRITING JAVASCRIPT RIGHT NOW');

//Final exercise

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 350, owners: ['Michael'] },
];
console.log(dogs);
//First one Done

dogs.forEach(function (arr) {
  arr.recommendedFood = arr.weight * 0.75 * 28;
});

//2

const eatingTooMuch = dogs.find(owner => (owner.owners = 'Sarah'));

console.log(eatingTooMuch);

if (eatingTooMuch.curFood > eatingTooMuch.recommendedFood) {
  console.log('Eating too much ');
} else {
  console.log('Not eating enough');
}

//3

const { array1, array2 } = {
  array1: dogs
    .filter(dogs => dogs.curFood > dogs.recommendedFood)
    .flatMap(dogs => dogs.owners),
  array2: dogs
    .filter(dogs => dogs.curFood < dogs.recommendedFood)
    .flatMap(dogs => dogs.owners),
};

console.log(array1, array2);

//Filter the lements in the array
//4

const string1 = array1.join(' and ');
const string2 = array2.join(' and ');

console.log(`${string1}'s are eating too much`);
console.log(`${string2}'s are eating too little`);

//5

const findingDog = dogs.some(acc => acc.curFood === acc.recommendedFood);

console.log(findingDog);

//6
const checkingFood = dog =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood > dog.recommendedFood * 1.1;

const findingDog2 = dogs.some(checkingFood);

//filter method is great in making copies of arrays to another since you filter only the elemnts needed
const newArr = dogs.filter(checkingFood);
console.log(newArr);

//7 Is retarded so there is no poiint in trying what does Okay mean anyway ? its basically dogs.map(dog => dog.curFood > dog.recommendedFood) most likely.

//8 Last one pretty simple slice the array and sort it , you can also make a shallow copy using the spread operator

const lastOne = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);

/////////// LECTURE ABOUT NUMBERS , DATES ,/////////////// FORMATS/////////////////////////////////////////

console.log(+'23');

//parsing a number
console.log(Number.parseInt('30', 10));
console.log(Number.parseInt('23', 10));
console.log(Number.parseFloat('2.5', 10));

console.log(Number.isNaN(23 / 0));
console.log(Number.isFinite(20));

console.log(Number.isFinite('20'));

/////////// Reminder and Math F function////////////////

//checking even or not
console.log(8 % 3); //reminder operator to check for the reminder of an operation
const isEven = n => n % 2 === 0;
console.log(isEven(3));
isEven(7);

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    if (i % 2 === 0) {
      row.style.backgroundColor = 'red';
    } else {
      row.style.backgroundColor = 'green';
    }
  });
});

//////////////// MATH F other functions ////////////////////

console.log(Math.sqrt(25));
console.log(Math.max(6, 18, 23, 11, 21)); //or math Min
console.log(Math.PI * Number.parseFloat('10px') ** 2);
console.log(Math.trunc(Math.random() * 6) + 1); // removes the decimal part with the Trunc

//creating a random Int
const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;

console.log(randomInt(10, 20));

//Rounding Integers operations
console.log(Math.trunc(23.3333));
///Math Trunc, Floor, Ceil are very similar techincally
console.log(Math.round(23.9));
//Math Floor to the nearest number BETTER than Trunc to use floor to round negative and positive
console.log(Math.floor(23.2) + 'Hello');
//Math Ceil round down
console.log(Math.ceil(23.1) + 'Hello');
//Rounding Decimal Numbers and creates it as a string
console.log(+(2.7).toFixed(1));
console.log(5 % 2); //Reminder symbol to check even or uneven numbers
console.log(8 % 3);
console.log(isEven(3)); // in javascript of course you have a checker for even or uneven
//Numeric Seperator
// using the dot...........
const diameter = 287.7372;
console.log(Number('232.3232'));
//BIG INTEGER
console.log(2 ** 53 - 1); //BIG INT NUMBER LARGEST
console.log(Number.MAX_SAFE_INTEGER);
console.log(21312312312312312312312321312312313n);
console.log(typeof 20n);
////////// Math Operations on BIG INT NUMBERS DO NOT WORK/////

//Returns the closest Big Int Number.
console.log(11n / 3n);

//////////// DATES AND TIMES IN JS /////////////////////////

//Creating a date
const date = new Date();
console.log(new Date('December 24, 2021'));
console.log(new Date(_account1.movementsDates[0]));

console.log(new Date(2035, 10, 19, 15, 23, 5));
const future = new Date(2042, 10, 15, 23, 10, 0);
console.log(future.getFullYear()); //GetFullYear , Day, Month, hour, minute......... etc...........

//Getting the time from when something happened and we can use it
console.log(future.getTime());
console.log(new Date(2299698600000));
//Also the set date variables which helps us in setting the date or years or months etc....
future.setFullYear(2021);
console.log(future);

//Calculations with Dates , taking 2 dates and returning the abs value to fixed because its a day not a float
const returnDates = (date1, date2) =>
  Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)).toFixed();

const days1 = returnDates(new Date(2042, 10, 15, 23), new Date(2043, 1, 1, 1));
console.log(days1);

/////////////////// Internationalization API //////////////

//EXPERIMENTING WITH THE API
const now = new Date();

//formating the date on what you like to dispaly.
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'numeric', //numeric , long , 2-digit these are the formats you can set
  year: 'numeric',
};

const localeTime = navigator.language;
console.log(localeTime);

labelDate.textContent = new Intl.DateTimeFormat(localeTime, options).format(
  now
);

//Numbers and Units defined

const optionsCurr = {
  style: 'currency',
  currency: 'EUR',
  useGrouping: true,
};

const num = 3888.23;
console.log(
  `Syria: `,
  new Intl.NumberFormat(localeTime, optionsCurr).format(num)
);

////////// Timers and Set Interval Timer in JS/////////////
const object = ['oli', 'ali'];

//Timeout sets a function to be run after a set amount of time
setTimeout(() => console.log('This is a timeout'), 3000);
const time = setTimeout(
  (ing1, ing2) => console.log(ing1 + ing2),
  3000,
  ...object
);

if (object.includes('ali')) clearTimeout(time);

//Set Interval Function
setInterval(function () {
  const now = new Date();
}, 1000);
