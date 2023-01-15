window.addEventListener("DOMContentLoaded", () => {
  const tabsParent = document.querySelector(".tabheader__items"),
    tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent"),
    loader = document.querySelector(".loader");

  // loader
  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, 2000);

  // function
  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });
    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add("tabheader__item_active");
  }
  hideTabContent();
  showTabContent();
  tabsParent.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((item, idx) => {
        if (target == item) {
          hideTabContent();
          showTabContent(idx);
        }
      });
    }
  });

  // Time
  const deadLine = "2023-02-09";
  //   console.log(Date.parse("2023-02-09"));
  function getTimeRemaining(endtime) {
    const timer = Date.parse(endtime) - Date.parse(new Date()),
      days = Math.floor(timer / (1000 * 60 * 60 * 24)), // kun
      hours = Math.floor((timer / (1000 * 60 * 60)) % 24), // soat
      minutes = Math.floor((timer / 1000 / 60) % 60), // minut
      seconds = Math.floor((timer / 1000) % 60); // second
    return { timer, days, hours, minutes, seconds };
  }
  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }
  getZero();
  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timeInterval = setInterval(updatClock, 1000);

    updatClock();
    function updatClock() {
      const t = getTimeRemaining(endtime);

      (days.innerHTML = getZero(t.days)),
        (hours.innerHTML = getZero(t.hours)),
        (minutes.innerHTML = getZero(t.minutes)),
        (seconds.innerHTML = getZero(t.seconds));
      if (t.timer <= 0) {
        clearInterval(timeInterval);
      }
    }
  }
  setClock(".timer", deadLine);

  //   Modal

  const modalTrigger = document.querySelectorAll(`[data-modal]`),
    modal = document.querySelector(".modal"),
    modalCloseBtn = document.querySelector(`[data-close]`);

  function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }

  function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
    clearInterval(modalTimerId);
  }
  modalTrigger.forEach((item) => {
    item.addEventListener("click", openModal);
  });

  modalCloseBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target == modal) {
      closeModal();
    }
  });

  //   https://www.toptal.com/developers/keycode

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });

  const modalTimerId = setTimeout(openModal, 5000);

  // console.log(window.pageYOffset + document.documentElement.clientHeight);
  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal();
      window.removeEventListener("scroll", showModalByScroll);
    }
  }
  window.addEventListener("scroll", showModalByScroll);
  // window.addEventListener("scroll", showModalByScroll, { once: true });
});
