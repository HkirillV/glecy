import {overlayForm} from "./function.js";
import {removeForm} from "./function.js";

const body = document.querySelector('body')
const searchBtn = document.querySelector('#search-button')
const overlayIcon = document.querySelector('.navigation-burger-menu__icon')
const searchForm = document.querySelector('.search')


searchBtn.addEventListener('click', function () {
  overlayForm(searchForm, searchBtn, overlayIcon)
})


window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    removeForm(searchForm, searchBtn, overlayIcon)
  }
})


searchBtn.addEventListener('click', (event) => {
  event._isClickWidthInMenu = true
});

searchForm.addEventListener('click', (event) => {
  event._isClickWidthInMenu = true
})


body.addEventListener('click', (event) => {
  if (event._isClickWidthInMenu) return;
  removeForm(searchForm, searchBtn, overlayIcon)
})