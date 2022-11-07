"use strict";
const adv = document.querySelectorAll(".promo__adv img"),
  wrapper = document.querySelector(".promo__bg"),
  genre = wrapper.querySelector(".promo__genre"),
  seriesList = document.querySelector(".promo__interactive-list");

const seiesDB = {
  series: [
    "Omar",
    "The Final Legacy",
    "Ertugrul",
    "Magnificent Century",
    "The Great Seljuks: Guardians...",
  ],
};

adv.forEach((value) => {
  value.remove();
});
genre.textContent = "Comedy";
wrapper.style.backgroundImage = "url(img/1.jpg)";
seriesList.innerHTML = "";
seiesDB.series.forEach((item, index) => {
  seriesList.innerHTML += `<ul class="promo__interactive-list">
  <li class="promo__interactive-item">${
    index + 1
  } ${item}<div class="delete"></div>
  </li>
  </ul>`;
});
