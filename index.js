"use strict";
// content this = xar doim nimagadir qaram(osiladi)

// ***************** ------------------------ ************************

// 1-) Oddiy function contexti ya`ni this xar doim window global objectga qaram bo`ladi
//  yani osiladi. Agarda qatiy rejim yoqu bo`lsa (use strict) context undefinedga teng

// function logger(a, b) {
//   console.log(this);
//   function sum() {
//     console.log(this);
//     /* return this.a + this.b;*/
//     return a + b;
//   }
//   console.log(sum());
// }
// logger(5, 10);

// ***************** ------------------------ ************************
// 2-) Context this objectni ichidagi metodda -- objectni o`ziga teng
// const obj = {
//   x: 10,
//   y: 14,
//   sum: function () {
/*    function logger() {
       console.log(this);
     }
     logger();*/
// console.log(this);
//   },
// };
// obj.sum();

// ***************** ------------------------ ************************
// 3-) Context this functiya konstruktorda yangi objectni ekzempyariga teng
function Car(name, color) {
  this.name = name;
  this.color = color;
  this.isAirbag = true;
}
const bmw = new Car("BMW", "Black");
console.log(bmw);

// ***************** ------------------------ ************************
// Closure => berilgan o`zgaruvchini function ichidan qidiradi agar function ichida bo`lmasa function tashqarisidan qidiradi
// const a = 25;
// function log() {
//   const a = 24;
//   console.log(a);
// }
// log();
