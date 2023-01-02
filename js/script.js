"use strict";
const box = document.querySelector("#box");
const buttons = document.querySelectorAll("button");
const circles = document.querySelectorAll(".circle");
const circle = document.querySelector(".circle");
const hearts = document.querySelectorAll(".heart");
const circleWrappers = document.querySelector(".circle__wrapper");
console.dir(box);

// box.style.backgroundColor = "green";
// box.style.width = "100px";
// box.style.height = "100px";
box.style.cssText = `background-color: red; width:150px; height:150px`;

// buttons[0].style.width = "150px";
circles[2].style.backgroundColor = "yellow";
circles[2].style.color = "black";
circle.style.backgroundColor = "yellow";
circles[0].style.color = "black";

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = "green";
// }

hearts.forEach((item) => {
  item.style.backgroundColor = "black";
});

// Yangi element ochih createElement
const btn = document.createElement("button");

document.body.append(btn);

const myCircle = document.createElement("div");

myCircle.classList.add(`circle`);
// circleWrappers.append(myCircle);
// circleWrappers.appendChild(myCircle);

// before ==> oldin
// after ==> keyi
// append ==> qo`shish
// remove() ==> elementni o`chirish
// circleWrappers.before(myCircle);
// circleWrappers.after(myCircle);

// circles[0].before(myCircle);
// circleWrappers.insertBefore(myCircle);

// circles[0].after(myCircle);

// circles.forEach((index) => index.remove(myCircle));
// circles[0].remove(myCircle);
// circles[1].removeChild(myCircle);

// circles[1].replaceWith(myCircle);

// circleWrappers.append(myCircle);
// myCircle.innerHTML = "<h1>E</h1>";
// myCircle.textContent = "E";

circleWrappers.insertAdjacentHTML("afterbegin", "<h1>E</h1>"); // left chap tamonga qo`shadi
circleWrappers.insertAdjacentHTML("afterend", "<h2>A</h2>"); // bootm pastki tamonga qo`shadi
circleWrappers.insertAdjacentHTML("beforebegin", "<h3>M</h3>"); // top ustki tamonga qoshadi
circleWrappers.insertAdjacentHTML("beforeend", "<h4>L</h4>"); // right o`ng tamonga qo`shadi
