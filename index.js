"use strict";
const arr = [12, 13, 11, -7, 8, 95, -8];
// arr.sort((a, b) => a - b);
arr.sort(tartib);
console.log(arr);
function tartib(a, b) {
  return a - b;
}

// arr.pop(); // arr oxrgi elementini olib tashlash uchun ishlatamiz arr.push()
// arr.push(9); // arr oxriga bitta element qo`shadi
// arr.shift(); // arr boshidagi elementni o`chirib tashlaydi
// arr.unshift(0); // arr boshiga element qo`shadi
// arr[99] = 0;
// console.log(arr.length);

// arr larni itaratsiya qilish
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let value of arr) {
//   console.log(value);
// }

// forEach() arr method xisoblanadi
// arr.forEach(function (item, index, arr) {
//   console.log(`${index}: ${item} into arr ${arr}`);
// });

// const movies = prompt("What's your favourite movies", "");
// const userMovies = movies.split(", "); // arr ga solib beradi
// userMovies.sort(); // sartirovka qilish
// console.log(userMovies);
// console.log(userMovies.join("- "));
