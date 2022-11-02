"use strict";

let seriesDB = {
  genres: [],
};

function writeGenres() {
  let i = 1;
  while (i <= 3) {
    let a = i;
    i++;
    const b = prompt(`Yaxshi korgan janringiz ${a}`, "");
    seriesDB.genres[i] = b;
  }
}
writeGenres();
console.log(seriesDB.genres);
