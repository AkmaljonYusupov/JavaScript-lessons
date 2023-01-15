"use strict";

// const number = new Function();

// console.dir(number);

function Car(name, color, mph) {
  this.name = name;
  this.color = color;
  this.mph = mph;
  this.isAirbag = true;
  this.speed = function () {
    console.log(`Speed of car ${this.name} is ${this.mph}`);
  };
}
Car.prototype.sayHello = function () {
  console.log(`Car name of ${this.name} say hello`);
};
const bmw = new Car("bmw", "red", 64);
const merc = new Car("merc", "black", 90);
bmw.speed();
merc.speed();
bmw.sayHello();
merc.sayHello();
// console.log(Car.prototype.constructor.length);
console.log(bmw);
console.log(merc);
