"use strict";

// old way ==> eski yo`li
const box = document.getElementById("box");
// console.log(box);

// 1-) getElementsByTagName bizgaxardoim massiv qaytaradi
const button = document.getElementsByTagName("button")[2];

// console.log(button);

const circle = document.getElementsByClassName("circle");
console.log(circle);

// New way ==> yangi yo`li

const wrapper = document.querySelector(".wrapper");
console.log(wrapper);

const hearts = wrapper.querySelectorAll(".heart");
// console.log(hearts);

hearts.forEach((item) => {
  console.log(item);
});
