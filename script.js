"use strict";
// to string
// 1-)
// console.log(typeof String(4));

// 2-)
// console.log(typeof (`Akmaljon` + 24));

// const youtubeChannel = 10;
// console.log("youtube.com/channel/" + youtubeChannel);

// to numner
// 1-)
// console.log(typeof Number(`24`));

// 2-)
// console.log(typeof +`24`);

// 3-)
// console.log(typeof parseInt("24"));

// const number = parseInt(prompt("sanni kiriting"));
// console.log(typeof number);

// to boolean

// 0, "", null, undefined, NaN = xar doim false

let age = 0;

if (age) {
  console.log("A");
}

age = 24;
if (age) {
  console.log("a");
}

console.log(typeof Boolean("24"));

console.log(typeof !!"4");
