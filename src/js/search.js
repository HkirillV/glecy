import {overlayForm} from "./function.js";
import {removeForm} from "./function.js";

const body = document.querySelector('body')
const searchBtn = document.querySelector('#search-button')
const overlayIcon = document.querySelector('.navigation-burger-menu__icon')
const overlayColorIcon = document.querySelector('.icon-white')
const searchForm = document.querySelector('.search')

//authorization
const authorizationForm = document.querySelector('.authorization')
const loginBtn = document.querySelector('.navigation-button__login')
const overlayColorText = document.querySelector('.navigation-burger-menu__text')



searchBtn.addEventListener('click', function () {
  overlayForm(searchForm, searchBtn, overlayIcon, overlayIcon )
  removeForm(authorizationForm, loginBtn, overlayColorIcon, overlayColorText)
})


window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    removeForm(searchForm, searchBtn, overlayIcon, overlayIcon)
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
  removeForm(searchForm, searchBtn, overlayIcon, overlayIcon)
})

