"use strict";
// call, apply, bind

// function logger(speed) {
//   console.log(this);
//   //   console.log(this.name);
//   console.log(
//     `My car is ${this.name} color is ${this.color}. Max speed ${speed}`
//   );
// }
// const car = {
//   name: "BMW",
//   color: "Black",
// };

// logger.call(car, 250);
// logger.apply(car, [200]);

// logger();

// function calc(number) {
//   return this * number;
// }
// bind() yangi funksiya qaytaradi
// const multilpe2 = calc.bind(24);
// console.log(multilpe2(2));

const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  this.style.width = "10%";
  console.log(this);
});

const obj = {
  x: 10,
  y: 15,
  sum: function () {
    const logger = () => {
      console.log(this);
    };
    logger();
  },
};
obj.sum();

// strelkali funcsiya xech qanday contexga ega emas, u xar doim o`zining tepasidagi contextga qaram bo`ladi

// const calc = (a) => a + 10;

// console.log(calc(24));
