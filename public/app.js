'use strict';

const mainNavButton = document.getElementById("main-nav-button");
const mainNavWrapper = document.getElementById("main-nav-wrapper");

mainNavButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (mainNavButton.classList.contains("main-nav__toggle--closed")) {
    mainNavButton.classList.remove("main-nav__toggle--closed");
    mainNavButton.classList.add("main-nav__toggle--opened");
    mainNavWrapper.style.display = "block";
  } else {
    mainNavButton.classList.remove("main-nav__toggle--opened");
    mainNavButton.classList.add("main-nav__toggle--closed");
    mainNavWrapper.style.display = "none";
  }
})