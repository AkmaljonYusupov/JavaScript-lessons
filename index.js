"use strict";
//  OOP asoslari, prototipga yo'naltirilgan meros
// const firstName = "Akmaljon";
// const str = new String(firstName);
// console.log(typeof firstName);
// console.log(typeof str);

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

Object.setPrototypeOf(gm, car); // yuklab beradi
console.log(gm);

const bmw = Object.create(car); // yaratib beradi
console.log(gm);
