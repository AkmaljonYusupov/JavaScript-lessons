"use strict";
// eski yo`llori
// id orqali
const box = document.getElementById("box");
console.log(box);
// tagName orqali
const button = document.getElementsByTagName("button");
console.log(button);
// class orqali
const circles = document.getElementsByClassName("circle");
console.log(circles);

// Yangi yo`li

const wrapper = document.querySelector(".wrapper");
console.log(wrapper);

const hearts = wrapper.querySelectorAll(".heart");
// console.log(hearts);

hearts.forEach((value) => {
  console.log(value);
});
