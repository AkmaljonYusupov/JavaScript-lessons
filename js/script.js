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
