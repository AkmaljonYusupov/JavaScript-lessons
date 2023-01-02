"use strict";
const promoAdvs = document.querySelectorAll(".promo__adv img"),
  promogenres = document.querySelector(".promo__bg"),
  genre = promogenres.querySelector(".promo__genre"),
  seriesList = document.querySelector(".promo__interactive-list");

// 1- reklamani bloklash block advertising
promoAdvs.forEach((index) => {
  index.remove();
});
// 2-Drama janrini komediyaga o`zgartiring
genre.innerHTML = "comedy";

// 3-orqa fonni o`zgartiring JavaScript yordamida
// DOM orqali rasm qo`yish
promogenres.style.backgroundImage = 'url("../img/1.jpg")';

const seriesDB = {
  series: [
    "Omar",
    "The Final Legacy",
    "Ertugrul",
    "Magnificent Century",
    "The Great Seljuks: Guardians...",
  ],
};
seriesList.innerHTML = "";
seriesDB.series.forEach((item, index) => {
  seriesList.innerHTML += `<li class="promo__interactive-item">
   ${index + 1}) ${item}
    <div class="delete"></div>
  </li>`;
});
