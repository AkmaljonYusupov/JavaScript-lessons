"use strict";

let seriesDB = {
  count: 0,
  series: {},
  actors: {},
  genres: [],
  private: false,
  start: function () {
    while (
      seriesDB.count == "" ||
      seriesDB.count == null ||
      isNaN(seriesDB.count)
    ) {
      seriesDB.count = +prompt("Nechta serial ko`rdingiz?", "");
    }
  },
  rememberMySeries: function () {
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
  },
  etectLeveSeries: function () {
    if (seriesDB.count < 5) {
      console.log("Kam serial ko'ripsiz");
    } else if (seriesDB.count >= 5 && seriesDB.count < 10) {
      console.log("Siz classik tamoshabin ekansiz");
    } else if (seriesDB.count >= 10) {
      console.log("Siz serialchi zvezda ekansiz");
    } else {
      console.log("Error");
    }
  },
  writeGenres: function () {
    // let i = 0;
    // while (i <= 2) {
    //   //   const b = prompt(`Yaxshi korgan janringiz ${i + 1}`);
    //   //   if (b === "" || b === null) {
    //   //     console.log("siz berilgan maydonni to`ldirmadingiz");
    //   //     i--;
    //   //   } else {
    //   //     seriesDB.genres[i] = b;
    //   //   }

    //   i++;
    // }
    let b = prompt(
      "Yaxshi ko`rgan janeringizni vergul yordamida yozing"
    ).toLowerCase();
    if (b === "" || b === null) {
      console.log("siz berilgan maydonni to`ldirmadingiz");
      i--;
    } else {
      seriesDB.genres = b.split(", ");
      seriesDB.genres.sort();
    }
    seriesDB.genres.forEach((value, index) => {
      console.log(
        `Sizni yaxshi ko'rgan janeringiz ${index + 1} - nomi ${value}`
      );
    });
    //
  },
  showDB: function () {
    if (!seriesDB.private) {
      console.log(seriesDB);
    }
  },
  visibleDB: function () {
    if (seriesDB.private) {
      seriesDB.private = false;
    } else {
      seriesDB.private = true;
    }
  },
};
console.log(seriesDB);
