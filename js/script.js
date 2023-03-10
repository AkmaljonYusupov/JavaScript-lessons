"use strict";

const request = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), time);
  });
};
// request(1000).then(() => console.log("Request 1000 ms"));
// request(2000).then(() => console.log("Request 2000 ms"));
// request(3000).then(() => console.log("Request 3000 ms"));

// all = methodi shundayki xamma request lar ishga tushib bo`lgandan keyingina ishga tushadi
// Promise.all([request(1000), request(2000), request(3000)]).then(() => {
//   console.log("All");
// });

// race = methodi shundayki request larni qaysi biri birinchi ishga tushsagina ishlaydi
Promise.race([request(1000), request(2000), request(3000)]).then(() => {
  console.log("All");
});
