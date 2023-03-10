"use strict";

// const isFrendCome = true;

// const meetingRequest = new Promise((resolve, reject) => {
//   if (isFrendCome) {
//     const msg = "Frend I'm there";
//     resolve(msg);
//   } else {
//     const err = "I can't come there";
//     reject(err);
//   }
// });
// meetingRequest
//   .then((msg) => console.log(msg))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("I'm colling you"));

// asinc aveyt

// console.log("Request data...");

// setTimeout(() => {
//   console.log("Processing data...");

//   const product = {
//     name: "car",
//     color: "black",
//   };
//   setTimeout(() => {
//     product.status = "order";
//     console.log(product);
//   }, 2000);
// }, 2000);

// promise

console.log("Request data...");
const req = new Promise((resolve) => {
  setTimeout(() => {
    const product = {
      name: "car",
      color: "black",
    };
    console.log("Processing data...");
    resolve(product);
  }, 2000);
});
req
  .then((data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        data.status = "ordered";
        console.log("Get data ...");
        reject();
      }, 2000);
    });
  })
  .then((result) => console.log(result))
  .catch(() => console.log("Something went wrong"))
  .finally(() => console.log("Fetching end"));
