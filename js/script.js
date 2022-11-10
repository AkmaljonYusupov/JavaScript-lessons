'use strict'

document.addEventListener('DOMContentLoaded', () => {
  const adv = document.querySelectorAll('.promo__adv img'),
    wrapper = document.querySelector('.promo__bg'),
    genre = wrapper.querySelector('.promo__genre'),
    seriesList = document.querySelector('.promo__interactive-list'),
    addForm = document.querySelector('form.add'),
    inputVal = addForm.querySelector('.adding__input'),
    checkbox = addForm.querySelector("[type='checkbox']")

  const seriesDB = {
    series: [
      'Omar',
      'The Final Legacy',
      'Ertugrul',
      'Magnificent Century',
      'The Great Seljuks: Guardians...',
    ],
  }

  addForm.addEventListener('submit', (event) => {
    event.preventDefault()

    let newSeries = inputVal.value
    const favourite = checkbox.checked

    if (newSeries) {
      if (newSeries.length > 18) {
        newSeries = `${newSeries.substring(0, 18)}...`
      }

      if (favourite) {
        console.log('Sevimli serial qo’shilidi')
      }

      seriesDB.series.push(newSeries)
      sortArr(seriesDB.series)

      createSeriesList(seriesDB.series, seriesList)
    }

    event.target.reset()
  })

  const deleteAdv = (arr) => {
    adv.forEach((item) => {
      item.remove()
    })
  }

  const makeChanges = () => {
    genre.textContent = 'comedy'

    wrapper.style.backgroundImage = 'url("img/1.jpg")'
  }

  const sortArr = (arr) => {
    arr.sort()
  }

  function createSeriesList(series, parent) {
    parent.innerHTML = ''
    sortArr(series)

    series.forEach((item, idx) => {
      parent.innerHTML += `
        <li class="promo__interactive-item">${idx + 1} ${item}
          <div class="delete"></div>
        </li>
      `
    })

    document.querySelectorAll('.delete').forEach((trash, idx) => {
      trash.addEventListener('click', () => {
        trash.parentElement.remove()
        seriesDB.series.splice(idx, 1)

        createSeriesList(series, parent)
      })
    })
  }

  sortArr(seriesDB.series)
  deleteAdv(adv)
  makeChanges()
  createSeriesList(seriesDB.series, seriesList)
})
