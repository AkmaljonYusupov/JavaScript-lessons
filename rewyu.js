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

// const newNumber = number; // havolasi
// newNumber.x = 15;
// console.log(number);
// console.log(newNumber);

// function nusxaObj(obj) {
//   let objNusxa = {};
//   for (let key in obj) {
//     objNusxa[key] = obj[key];
//   }
//   return objNusxa;
// }

// const numbers = {
//   x: 10,
//   y: 15,
//   z: {
//     a: 1,
//     b: 2,
//   },
// };

// const newNumbers = nusxaObj(numbers);
// newNumbers.x = 15;
// newNumbers.z.a = 10;

// console.log(newNumbers);
// console.log(numbers);

// const numbers = {
//   x: 10,
//   y: 15,
// };

// const addNumbers = {
//   z: 20,
// };
// const allNumbers = Object.assign(numbers, addNumbers);
// console.log(allNumbers);

// const newNumbers = Object.assign({}, numbers);
// newNumbers.x = 15;
// console.log(newNumbers);
// console.log(numbers);

const arr = [1, 2, 3];
const numbers = arr.slice();

numbers[1] = "Akmaljon";
console.log(numbers);

// SPREAD massivni yangi massivga aylantirib beradi

const liverpool = ["Salah", "Mane"];
const manCity = ["Mahrez"];

const mixPlayer = [...liverpool, ...manCity];

console.log(mixPlayer);
