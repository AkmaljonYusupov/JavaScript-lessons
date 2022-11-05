"use strict";

// let x = 10;
// let y = x;

// y = x + 5;
// console.log(x);
// console.log(y);

// let isMarried = false;
// let isArray = isMarried;

// isArray = true;
// console.log(isMarried);
// console.log(isArray);

// const number = {
//   x: 10,
//   y: 5,
// };

// const newNumber = number;
// newNumber.x = 15;

// console.log(number);
// console.log(newNumber);

function nusxaObj(obj) {
  let objNusxa = {};
  for (let key in obj) {
    objNusxa[key] = obj[key];
  }
  return objNusxa;
}
