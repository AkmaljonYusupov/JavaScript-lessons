"use strict";

const wrapper = document.querySelector(".btn-block"),
  btns = document.querySelectorAll("button");
// consolda Click ni chiqarib beradi ixtiyoriy elementga bosganda
// wrapper.addEventListener("click", () => {
//   console.log("Click");
// });

// ona elementi orqali button tugmaga element qo`shish
// wrapper.addEventListener("click", (e) => {
//     // button tugmani bosilganda
//   if (e.target && e.target.tagName == "BUTTON") {
//     console.log("Click me");
//   }
// });

btns[0].addEventListener("click", () => {
  btns[1].classList.toggle("red");
});

/* Deligatsiya */
// 1-)
// wrapper.addEventListener("click", (e) => {
//   if (e.target && e.target.classList.contains("red")) {
//     console.log("Click me");
//   }
// });
// 1.1-)

wrapper.addEventListener("click", (e) => {
  if (e.target && e.target.matches("button.red")) {
    console.log("Click me");
  }
});

// btns.forEach((item) => {
//   item.addEventListener("click", () => {
//     console.log("Clicked");
//   });
// });

// dinamik tarzda button qo`shish
const btn = document.createElement("button");
btn.classList.add("red");
wrapper.append(btn);
