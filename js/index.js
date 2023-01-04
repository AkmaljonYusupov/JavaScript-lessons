"use strict";

const adv = document.querySelectorAll(".promo__adv img");
const promo = document.querySelector(".promo__bg"),
      genre = promo.querySelector(".promo__genre");
const promoInl = document.querySelector(".promo__interactive-list"),
      addForm = document.querySelector('form.add'),
      inputVal = addForm.querySelector('.adding__input'),
      checkbox = addForm.querySelector("[type='checkbox']");
//massivda berilgan elementlarni qo`shish
const seriesDB = {
  series: [
    "Omar",
    "The Final Legacy",
    "Ertugrul",
    "Magnificent Century",
    "The Great Seljuks: Guardians...",
  ],
};
// function bosh
const deleteAdv = (arr) =>{
  arr.forEach((itm) => {
    itm.remove();
  });
};
deleteAdv(adv);

const makeChanges = () =>{
  promo.style.backgroundImage = `url('img/1.jpg')`;
  genre.innerHTML = "comedy";
};
makeChanges();

const sortArr = (arr) =>{
arr.sort();
};
sortArr(seriesDB.series);

// 1-) reklamani bloklash
                  // adv.forEach((itm) => {
                  //   itm.remove();
                  // });

// 2-rasmni almashtirish
                  // promo.style.backgroundImage = `url('img/1.jpg')`;

// 3-) DRAMA so`zini comedy ga o`zgartirish
                    // genre.innerHTML = "comedy";


// function 
function createSeriesList(series, parent) {
    parent.innerHTML = "";
    sortArr(series)
    series.forEach((item, indx) => {
      parent.innerHTML += `<li class="promo__interactive-item">
                                    ${indx+1}. ${item}  
                                    <div class="delete"></div>
                             </li>`});

document.querySelectorAll(".delete").forEach((trash, idx) =>{
  trash.addEventListener("click",(e) =>{
    trash.parentElement.remove();
    seriesDB.series.splice(idx, 1);
    createSeriesList(series, parent);
  });
});
}
createSeriesList(seriesDB.series, promoInl);

// 5-) delete function

// Button bosilganda
addForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    let newSeries = inputVal.value;
    const favourite = checkbox.checked;

    if(favourite){
        console.log("Sevimli serial qo`shilidi");
      }
    if(newSeries){
            if(newSeries.length > 18){
            newSeries = `${newSeries.substring(0, 18)}....`;
            }
            
            seriesDB.series.push(newSeries);
            sortArr(seriesDB.series);
            createSeriesList(seriesDB.series, promoInl);
            e.target.reset();
    }
});
