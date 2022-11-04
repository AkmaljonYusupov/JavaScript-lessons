"use strict";

const theif = {
  jacket: "Black",
  height: 1.7,
  colors: {
    hair: "green",
    style: "curley",
  },
 howOut: function(){
    console.log("Fast with help doors");
}
};
theif.howOut()

// console.log(theif);
// // Object dagi ma`lumotlarni o`chirish
// delete theif.jacket;
// console.log(theif);

console.log(Object.keys(theif).length);
// Object larni arrayga olish uchun keys() metodidan foydalanamiz

for (let key in theif) {
  if (typeof theif[key] === "object") {
    for (let i in theif[key]) {
      console.log(`Property  ${i} has value ${theif[key][i]}`);
    }
  } else {
    console.log(`Property  ${key} has value ${theif[key]}`);
  },
   
}


