"use strict";

const car = {
  name: "bmw",
  color: "red",
  extra: {
    isAirbag: false,
    ballon: 5,
  },
};

const clone = JSON.parse(JSON.stringify(car));

clone.extra.ballon = 10;
console.log(clone);
console.log(car);

// const objToJSON = JSON.stringify(car);

// const jsonToObj = JSON.parse(objToJSON);

// console.log(objToJSON);

// console.log(jsonToObj);

// json.stringify => Objectdan json formatga o`girib beradi
// json.parse => json formatdan objectga o`girib beradi
