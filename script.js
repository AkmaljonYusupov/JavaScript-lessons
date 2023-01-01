"use strict";

const seriesDB = {
  count: 0,
  series: {},
  actors: {},
  genres: [],
  private: false,
  start: function () {
    seriesDB.count = +prompt("Nechta serial ko`rdingiz?", "");
    while (
      seriesDB.count == "" ||
      seriesDB.count == null ||
      isNaN(seriesDB.count)
    ) {
      seriesDB.count = +prompt("Nechta serial ko`rdingiz ? ", "");
    }
  },
  rememberMySeries: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Oxirgi ko`rgan serialingiz? "),
        b = prompt("Necha baxo berasiz");

      if (a != null && b != null && a != "" && b != "") {
        (seriesDB.series[a] = b), console.log("done");
      } else {
        console.log("error");
        i--;
      }
    }
  },

  detectLevelSeries: function () {
    if (seriesDB.count < 5) {
      console.log("Kam serial ko'ribsiz");
    } else if (seriesDB.count >= 5 && seriesDB.count < 10) {
      console.log("Siz classik tamoshabin ekansiz");
    } else if (seriesDB.count >= 10) {
      console.log("Siz serialchi zvezda ekansiz");
    } else {
      console.log("Error");
    }
  },
  showDb: function () {
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

  writeGenres: function () {
    // for (let i = 0; i < 1; i++) {
    // const genres = prompt(`Yaxshi ko'rgan janiringiz ${i + 1}`, "");
    // if (genres == "" || genres == null) {
    //   console.log("Siz noto`g`ri ma`lumot kiritdingiz");
    //   i--;
    // } else {
    //   seriesDB.genres[i] = genres;
    // }

    let genres = prompt(
      "Yaxshi ko`rgan janiringizni vergul yordamida kiriting"
    ).toLowerCase();
    console.log(genres);
    if (genres == "" || genres == null) {
      console.log("Siz noto`g`ri ma`lumot kiritdingiz");
      i--;
    } else {
      seriesDB.genres = genres.split(", ");
      seriesDB.genres.sort();
    }

    seriesDB.genres.forEach((item, idx) => {
      console.log(`Yaxshi ko'rgan janiringiz ${idx + 1}- nomi ${item}`);
    });
  },
};
