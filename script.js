"use strict";

const btn = document.querySelector("#btn");
const overlay = document.querySelector(".overlay");
const link = document.querySelector("a");

// 1-) eski yo`llari

// btn.onclick = function () {
//   alert("Click from js");
// };
// btn.onclick = function () {
//   alert("click 2");
// };

// 2-) yangi yo`li

// click ==> bosilganda
// mouseenter ==> hover bo`lganda

// btn.addEventListener("click", () => {
//   alert("Click 1 ");
// });

// btn.addEventListener("click", () => {
//   alert("Click 2");
// });

// btn.addEventListener("mouseenter", (e) => {
//   e.target.remove();
//   console.log(e.target);
//   alert("Hover");
// });

let i = 0;

// delete element callback function
// const deleteElement = (event) => {
// event.target.remove();
// };
// btn.addEventListener("click", deleteElement);

// const addElement = (event) =>{
//     i++;
// if(i===3){
//     btn.removeEventListener('click', addElement);
//             }
//     console.log(i);
// };

// btn.addEventListener('click', addElement);

// const cb = (e) =>{
//     console.log(e.currentTarget);
// }

// btn.addEventListener('click', cb);
// overlay.addEventListener('click', cb);

// link.addEventListener('click', (e) =>{
//     e.preventDefault();
//     alert('link');

// });


const btns = document.querySelectorAll("button");

const logger = () =>{
    console.log(1);

};

btns.forEach((item) => {
  item.addEventListener("click", logger);
});
