"use strict";

const now = new Date();

// hozirgi yilni chiqarib beradi
// console.log(now.getFullYear());

// hozirgi oyni chiqarib beradi
// console.log(now.getMonth());

// hozirgi kunni sanani chiqarib beradi
// console.log(now.getDate());

// hozirgi xafta kunini aks etagi dasturlashda sonlar 0 dan boshlanadi yakshanba 0 bo`ladi dushanba 1 bo`ladi v.h...
// console.log(now.getDay());

// hozirgi vaqtni milli  sekundda ifoda qiladi chiqarib beradi
// console.log(now.getTime());

// soatni chiqarib beradi
// console.log(now.getHours());

// O`zimizni vaqt zonasiga nisbatab chiqarib beradi UTC ==> shu qo`shiladi yuqoridagilar xammasiga
// console.log(now.getUTCHours());

// vaqtni o`zgartirish yuqoridagilarga xam bir xilda qo`laniladi
// console.log(now.getHours(18));
// console.log(now);

let start = new Date();

for (let i = 0; i < 100000; i++) {
  let some = i ** 3;
}

let end = new Date();
console.log(start.getTime());
console.log(end.getTime());

alert(`Loop competed ${end - start} milliseconds`);
