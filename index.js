"use strict";
const numberOfSeries = +prompt("Nechta serial ko'rdingiz?", "");

let seriesDB = {
  count: numberOfSeries,
  series: {},
  actors: {},
  genres: [],
  private: false,
};
console.log(seriesDB);

let i = 0;
do {
  const a = prompt("Oxirgi ko'rgan serialingiz?"),
    b = +prompt("Nechi baxo berasiz?");
  if (a != "" && b != "" && a != null && b !== null) {
    seriesDB.series[a] = b;
    console.log("done");
  } else {
    console.log("error");
    i--;
  }
  i++;
} while (i < 2);

// while (seriesDB.count >= 5 && seriesDB.count < 10) {
//   console.log("Siz classik tamoshabin ekansiz");
// }
// while (seriesDB.count >= 10) {
//   console.log("Siz serialchi zvezda ekansiz");
// }else{
//   console.log("Error");
// }
// for (let i = 0; i < 2; i++) {
//   const a = prompt("Oxirgi ko'rgan serialingiz?"),
//     b = +prompt("Nechi baxo berasiz?");
//   if (a != null && b != null && a != "" && b != "") {
//     seriesDB.series[a] = b;
//     console.log("done");
//   } else {
//     console.log("error");
//     i--;
//   }
// }

// if (seriesDB.count < 5) {
//   console.log("Kam serial ko'ripsiz");
// } else if (seriesDB.count >= 5 && seriesDB.count < 10) {
//   console.log("Siz classik tamoshabin ekansiz");
// } else if (seriesDB.count >= 10) {
//   console.log("Siz serialchi zvezda ekansiz");
// } else {
//   console.log("Error");
// }
