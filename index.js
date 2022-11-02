"use strict";

let numberOfSeries;
function startApp() {
  while (
    numberOfSeries == "" ||
    numberOfSeries == null ||
    isNaN(numberOfSeries)
  ) {
    numberOfSeries = +prompt("Nechta serial ko`rdingiz?", "");
  }
}
startApp();

let seriesDB = {
  count: numberOfSeries,
  series: {},
  actors: {},
  genres: [],
  private: false,
};
// console.log(seriesDB.private);

function showDB(hidden) {
  if (!hidden) {
    console.log(seriesDB);
  }
}
showDB(seriesDB.private);

function rememberMySeries() {
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
}
rememberMySeries();

function detectLeveSeries(tasc) {
  if (tasc < 5) {
    console.log("Kam serial ko'ripsiz");
  } else if (tasc >= 5 && tasc < 10) {
    console.log("Siz classik tamoshabin ekansiz");
  } else if (tasc >= 10) {
    console.log("Siz serialchi zvezda ekansiz");
  } else {
    console.log("Error");
  }
}
detectLeveSeries(seriesDB.count);

function writeGenres() {
  let i = 0;
  while (i <= 2) {
    const b = prompt(`Yaxshi korgan janringiz ${i + 1}`);
    seriesDB.genres[i] = b;
    i++;
  }
}
writeGenres();

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
