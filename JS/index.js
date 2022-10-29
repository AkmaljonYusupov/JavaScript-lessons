"use strict";
const numberOfSeries = prompt("Nechta serial ko'rdingiz?", "");

let seriesDB = {
  count: numberOfSeries,
  series: {},
  actors: {},
  genres: [],
  privat: false,
};
console.log(seriesDB);

const a = prompt("Oxirgi ko'rgan serialingiz?"),
  b = prompt("Nechi baxo berasiz?"),
  c = prompt("Oxirgi ko'rgan serialingiz?"),
  d = prompt("Nechi baxo berasiz?");
seriesDB.series[a] = b;
seriesDB.series[c] = d;

const theif = {
  jacket: "Black",
};

theif["age"] = 20;
console.log(theif);
// console.log(serial);
