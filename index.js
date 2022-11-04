"use strict";
const theif = {
  jacket: "black",
  height: 1.7,
  colors: {
    hair: "gray",
    style: "curley",
  },
};
// console.log(theif.height);

// delete theif.jacket;
// console.log(theif);
console.log(Object.keys(theif).length);

for (let key in theif) {
  if (typeof theif[key] === "object") {
    for (let i in theif[key]) {
      console.log(`Property ${i} has value ${theif[key][i]}`);
    }
  } else {
    console.log(`Property ${key} has value ${theif[key]}`);
  }
}
