import {overlayForm} from "./function.js";
import {removeForm} from "./function.js";

const body = document.querySelector('body')
const overlayIcon = document.querySelector('.icon-white')
const overlayColorText = document.querySelector('.navigation-burger-menu__text')
const loginBtn = document.querySelector('.navigation-button__login')
const authorizationForm = document.querySelector('.authorization')


loginBtn.addEventListener('click', function () {
  overlayForm(authorizationForm, loginBtn, overlayIcon, overlayColorText)
})


window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    removeForm(authorizationForm, loginBtn, overlayIcon, overlayColorText)
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
  removeForm(authorizationForm, loginBtn, overlayIcon, overlayColorText)
})