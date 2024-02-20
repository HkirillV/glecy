import {overlayFormElement} from "./function.js";
import {removeFormElement} from "./function.js";

const bodyElement = document.querySelector('body')
const searchBtnElement = document.querySelector('#search-button')
const overlayIconElement = document.querySelector('.navigation-burger-menu__icon')
const overlayColorIconElement = document.querySelector('.icon-white')
const searchFormElement = document.querySelector('.search')

//authorization
const authorizationFormElement = document.querySelector('.authorization')
const loginBtnElement = document.querySelector('.navigation-button__login')
const overlayColorTextElement = document.querySelector('.navigation-burger-menu__text')



searchBtnElement.addEventListener('click', function () {
  overlayFormElement(searchFormElement, searchBtnElement, overlayIconElement, overlayIconElement )
  removeFormElement(authorizationFormElement, loginBtnElement, overlayColorIconElement, overlayColorTextElement)
})


window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    removeFormElement(searchFormElement, searchBtnElement, overlayIconElement, overlayIconElement)
  }
})


searchBtnElement.addEventListener('click', (event) => {
  event._isClickWidthInMenu = true
});

searchFormElement.addEventListener('click', (event) => {
  event._isClickWidthInMenu = true
})


bodyElement.addEventListener('click', (event) => {
  if (event._isClickWidthInMenu) return;
  removeFormElement(searchFormElement, searchBtnElement, overlayIconElement, overlayIconElement)
})

