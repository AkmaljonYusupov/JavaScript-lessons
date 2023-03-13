"use strict";

// MAP method - Bizga yangi massiv qaytaradi eski massivni qiymatini o`zgartirib

// const car = ["MErc", "BmW", "RolCE RoyCe"];

// const arr = car.map((item) => item.toLowerCase());
// console.log(arr);

// FILTER method - yangi massiv qaytaradi filter qilib
// const car = ["mercedes benz", "bmw", "audi", "rollce royce "];
// const arr = car.filter((item) => item.length < 5);
// console.log(arr);

// SOME / EVERY method - boolean qiymat qaytaradi
// const arr = [1, "akmaljon", true];
// console.log(arr.some((item) => typeof item == "number"));
// console.log(arr.every((item) => typeof item == "number"));

// REDUCE method - bitta qandaydir qiymat qaytaradi
// const arr = [17, 2, 13, 42, 15, 26, 47];
// const news = arr.reduce((sum, curent) => sum * curent, 4);
// console.log(news);

const arr = ["bmw", "merc", "rollce royce"];
const res = arr.reduce((sum, curent) => `${sum},${curent}`);
console.log(res);
