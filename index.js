"use strict";

// 1 - code;
// const firstname = "Akmaljon";
// const str = new String(firstname);

// console.log(typeof firstname);
// console.log(typeof str);

// 2-code

const car = {
  motor: "X",
  colors: "red",
  isAirbag: true,
  isSpeed: function () {
    console.log(320);
  },
};

const gm = {
  isAirbag: false,
};

// gm.__proto__ = car;
// console.log(gm);
// gm.isSpeed();

Object.setPrototypeOf(gm, car);
console.log(gm);

const bmw = Object.create(car);
