"use strict";

// const age = +prompt("How old are yu?", "");

// if else

// if (age > 25) {
//   console.log("Horror films");
// } else if (age > 18) {
//   console.log("Boyevik films");
// } else {
//   console.log("Carton");
// }

// turnery

//operator            true             :   false
// age > 25 ? console.log("Harron films") : console.log("Carton");

const color = prompt("Sevitaporni qaysi chrog`i yoniq?", "");

switch (color) {
  case "red":
    console.log("Stop");
    break;
  case "green":
    console.log("Goo");
    break;
  case "yellow":
    console.log("Slowly");
    break;
  default:
    console.log("Traffic jam");
    break;
}
