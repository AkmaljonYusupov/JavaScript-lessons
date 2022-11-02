"use strict";
const user = "Akmaljon";
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(user.length);
// console.log(arr.length);
// console.log(user[2]);
// console.log(arr[2]);

console.log(user.toUpperCase()); // berilgan string o`zgaruvchini xamma xarflarini katta xarfda chiqaradi
console.log(user.toLowerCase()); // berilgan sring o`zgaruvchini xamma xarflarini kichik xarfda chiqaradi

const greeting = "Hello World";

console.log(greeting.toLowerCase().indexOf("a")); // berilgan string o`zgaruvchidan indexof() da so`ralgan ma`lumotni qidiradi

console.log(greeting.slice(6, greeting.length)); // Berilgan string o`zgaruvchidan oraliq bo`yicha so`zlarni qirqib oladi
// console.log(greeting.slice(6));
// console.log(greeting.slice(-6, 0));

// console.log(greeting.substring(6, 11));
// console.log(greeting.substr(6, 5));

const numbers = 8.8;
const borderWidh = "13.9px";
console.log(parseInt(borderWidh)); // berilgan o`zgaruvchidan sonni faqat butun qismini chiqarib beradi
console.log(parseFloat(borderWidh)); // berilgan o`zgaruvchidan sonni xammasini chiqarib beradi butun son bo`lsa butun sonni yokida o`nli kasr bo`lsa shu qiymatni chiqaradi
console.log(Math.round(numbers)); // yaxlitlaydi
