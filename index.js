"use strict";
// const btn = document.querySelector("#btn");
// const overlay = document.querySelector(".overlay");
// btn.onclick = function () {
//   alert("Click");
// };

// btn.onclick = function () {
//   alert("Click 2");
// };

// btn.addEventListener("click", () => {
//   alert("Click 2");
// });
// btn.addEventListener("click", () => {
//   alert("Click 3");
// });

// btn.addEventListener("mouseenter", (event) => {
//   alert("Hover");
//   event.target.remove();
// });

// const deleteElement = (event) => {
//   event.target.remove();
// };
// btn.addEventListener("click", deleteElement);

// let i = 0;
// const addElement = (event) => {
//   i++;
//   if (i === 3) {
//     btn.removeEventListener("click", addElement);
//   }
//   console.log(i);
// };

// const cb = (event) => {
//   console.log(event.currentTarget);
// };

// btn.addEventListener("click", cb);
// overlay.addEventListener("click", cb);

const link = document.querySelector("a");
link.addEventListener("click", (event) => {
  event.preventDefault();
  alert("Linka");
});

const logger = () => {
  console.log(1);
};

const btns = document.querySelectorAll("button");
btns.forEach((item) => {
  item.addEventListener("click", logger);
});
