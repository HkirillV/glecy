import {overlayForm} from "./function.js";
import {removeForm} from "./function.js";

const body = document.querySelector('body')
const overlayIcon = document.querySelector('#login-icon')
const loginBtn = document.querySelector('.navigation-button__login')
const authorizationForm = document.querySelector('.authorization')


loginBtn.addEventListener('click', function () {
  overlayForm(authorizationForm, loginBtn, overlayIcon)
  loginBtn.style.color = 'white' ? loginBtn.style.color = 'blue' : loginBtn.style.color = 'white'
})


window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    removeForm(authorizationForm, loginBtn, overlayIcon)
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
  removeForm(authorizationForm, loginBtn, overlayIcon)
})