"use strict";

const btn = document.querySelector("#btn");

// let timerId;
// let i = 0;
// Amaliyot code
function myAnimation() {
  const car = document.querySelector(".car");
  let pos = 0;

  const timerId = setInterval(frame, 10);

  function frame() {
    if (pos === 700) {
      clearInterval(timerId);
    } else {
      pos++;
      car.style.left = pos + "px";
    }
  }
}

btn.addEventListener("click", myAnimation);

// btn.addEventListener("click", () => {
// setTimeout bosganda 1000 shu ya`ni 1s dan keyin ishga tushadi
//   const timerId = setTimeout(logger, 1000);
//   timerId = setInterval(logger, 500);
// });

// function logger() {
//   if (i === 3) {
//     clearInterval(timerId);
//   }
//   i++;
//   console.log("hellooooo");
// }

// let id = setTimeout(function log() {
//   console.log("Hello World");
//   id = setTimeout(log, 500);
// }, 500);

// vaqt oralig`ida ishga tushuvchi funksiyalar xaqida

// setTimeout(() => {
//   console.log("setTimeout");
// }, 8000);

// shu tarzda ishlatsak xam bo`ladi lekin noqulay bo`ladi
// setTimeout(
//   (text) => {
//     console.log(text);
//   },
//   8000,
//   "Hello"
// );

// callback function yordamida ishlatish

// setTimeout(logger, 5000);

// function logger() {
//   console.log("hellooo");
// }

// O`zgaruvchiga biriktirgan xolda ishlatish
// const timerId = setTimeout(logger, 5000);
// intervalni tozalab tshlash
// clearInterval(timerId);
// function logger() {
//   console.log("hellooo");
// }
