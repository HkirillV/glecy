import {overlayForm} from "./function.js";
import {removeForm} from "./function.js";

const body = document.querySelector('body')
const overlayColorIcon = document.querySelector('.icon-white')
const overlayColorText = document.querySelector('.navigation-burger-menu__text')
const loginBtn = document.querySelector('.navigation-button__login')
const authorizationForm = document.querySelector('.authorization')

//search
const searchForm = document.querySelector('.search')
const searchBtn = document.querySelector('#search-button')
const overlayIcon = document.querySelector('.navigation-burger-menu__icon')




loginBtn.addEventListener('click', function () {
  overlayForm(authorizationForm, loginBtn, overlayColorIcon, overlayColorText)
  removeForm(searchForm, searchBtn, overlayIcon, overlayIcon)
})


window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    removeForm(authorizationForm, loginBtn, overlayColorIcon, overlayColorText)
  }
})


loginBtn.addEventListener('click', (event) => {
  event._isClickWidthInMenu = true
})

authorizationForm.addEventListener('click', (event) => {
  event._isClickWidthInMenu = true
})


body.addEventListener('click', (event) => {
  if (event._isClickWidthInMenu) return;
  removeForm(authorizationForm, loginBtn, overlayColorIcon, overlayColorText)
})