"use strict";

function sayHello() {
  console.log("Good morning");
}
sayHello();

function sayBye() {
  console.log("Good bye");
}
sayBye();

const arr = [1, 24, -34, -14, -5, 60, 17, 8, 9, 10],
  sorted = arr.sort(compareNum);

function compareNum(a, b) {
  return a - b;
}

console.log(sorted);
