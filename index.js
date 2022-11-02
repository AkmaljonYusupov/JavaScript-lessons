"use strict";

// function Declaration

function calc(a, b) {
  return a + b;
}
console.log(calc(10, 5));
const sumOfAandB = calc(40, 5);
console.log(sumOfAandB);

let age = 24;
function seyMyName(name, surname) {
  let age = 21;
  console.log(`My name is ${name} ${surname}`);
  console.log(age);
}
seyMyName("Akmaljon", "Yusupov");
console.log(age);

// function Expression
const logger = function () {
  console.log("Hello World");
};
logger();

// function Arrow
const calcs = (a, b) => a + b;
console.log(calcs(20, 1));

const text = (a) => {
  console.log("!");
  return a;
};
console.log(text(5));
