import {overlayFormElement} from "./function.js";
import {removeFormElement} from "./function.js";

const bodyElement = document.querySelector('body')
const overlayColorIconElement = document.querySelector('.icon-white')
const overlayColorTextElement = document.querySelector('.navigation-burger-menu__text')
const loginBtnElement = document.querySelector('.navigation-button__login')
const authorizationFormElement = document.querySelector('.authorization')

//search
const searchFormElement = document.querySelector('.search')
const searchBtnElement = document.querySelector('#search-button')
const overlayIconElement = document.querySelector('.navigation-burger-menu__icon')




loginBtnElement.addEventListener('click', function () {
  overlayFormElement(authorizationFormElement, loginBtnElement, overlayColorIconElement, overlayColorTextElement)
  removeFormElement(searchFormElement, searchBtnElement, overlayIconElement, overlayIconElement)
})


window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    removeFormElement(authorizationFormElement, loginBtnElement, overlayColorIconElement, overlayColorTextElement)
  }
})


loginBtnElement.addEventListener('click', (event) => {
  event._isClickWidthInMenu = true
})

authorizationFormElement.addEventListener('click', (event) => {
  event._isClickWidthInMenu = true
})


bodyElement.addEventListener('click', (event) => {
  if (event._isClickWidthInMenu) return;
  removeFormElement(authorizationFormElement, loginBtnElement, overlayColorIconElement, overlayColorTextElement)
})