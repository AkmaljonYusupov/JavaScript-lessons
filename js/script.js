"use strict";

const btns = document.querySelectorAll("button");

// class lar soni
// console.log(btns[0].classList.length);

// class larni chiqrib beruvchi xisoblanadi
// console.log(btns[0].classList.item(0));

// classni o`chiradi
// btns[0].classList.remove("blue");

//  class qo`shadi
// btns[1].classList.add("blue", "some");
// btns[0].classList.add("red");

// class bor bo`lsa o`chiradi yo`q bo`lsa qo`shib qo`yadi => bor bo`lsa yo`q qiladi, yo`q bo`lsa bor qiladi
// btns[0].classList.toggle("blue");

// classni bor yoki yo`qligini tekshiradi ayni if ni ichida berilgan shartga ko`ra
// contains('....') da berilgan class qiymatiga ko`ra
// if (btns[0].classList.contains("red")) {
//   console.log("yeap");
// }

btns[0].addEventListener("click", () => {
  //   if (!btns[1].classList.contains("red")) {
  //     btns[1].classList.add("red");
  //   } else {
  //     btns[1].classList.remove("red");
  //   }

  btns[1].classList.toggle("red");
});

// Ma`lumot classList
const div = document.createElement("div");
div.className = "foo";

// our starting state: <div class="foo"></div>
console.log(div.outerHTML);

// use the classList API to remove and add classes
div.classList.remove("foo");
div.classList.add("anotherclass");

// <div class="anotherclass"></div>
console.log(div.outerHTML);

// if visible is set remove it, otherwise add it
div.classList.toggle("visible");

// add/remove visible, depending on test conditional, i less than 10
let i;
div.classList.toggle("visible", i < 10);

console.log(div.classList.contains("foo"));

// add or remove multiple classes
div.classList.add("foo", "bar", "baz");
div.classList.remove("foo", "bar", "baz");

// add or remove multiple classes using spread syntax
const cls = ["foo", "bar"];
div.classList.add(...cls);
div.classList.remove(...cls);

// replace class "foo" with class "bar"
div.classList.replace("foo", "bar");
