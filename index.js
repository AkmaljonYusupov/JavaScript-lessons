"use strict";
// Callback function
function first(cb) {
  // code
  setTimeout(() => {
    console.log(1);
    cb();
  }, 1000);
}
function second() {
  // code
  console.log(2);
}
first(second);

// Callback function
function edu(subject, callback) {
  console.log(`I wanna teach ${subject}`);
  callback();
}

function done() {
  console.log(`Tha's great`);
}

edu("JavaScript", done);

// edu("JavaScript", function () {
//   console.log("Tha's great");
// });
