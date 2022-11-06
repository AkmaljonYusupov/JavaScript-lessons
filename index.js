"use strict";

// to string
console.log(typeof String(4));

console.log(typeof ("Akmaljon" + 24));
const youtubeChanel = 10;
console.log(`youtube.com/channel/` + youtubeChanel);

// to Number
// 1-)
console.log(typeof Number("24"));
// 2-)
console.log(typeof +"24");
// 3-)
console.log(typeof parseInt(24));

// to Boolean
// 0, "", null, undefined, NaN ==> xar doim false chiqadi
let age = 0;
if (age) {
  console.log("24");
}
age = 24;
if (age) {
  console.log("Akmaljon");
}

console.log(typeof Boolean("4"));
console.log(typeof !!"4");
