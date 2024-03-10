import {removeFormElement} from "./function.js";

const bodyElement = document.querySelector('body')
const catalogButtonElement = document.querySelector('.navigation-menu__catalog')
const catalogButtonImageElement = document.querySelector('.navigation-menu__icon')
const catalogButtonTextElement = document.querySelector('.navigation-menu__text')
const catalogListElement = document.querySelector('.navigation-menu__catalog-list')

catalogButtonElement.addEventListener('click', () => {
  catalogButtonImageElement.classList.toggle('catalog-active')
  catalogButtonElement.classList.toggle('button-active')
  catalogListElement.classList.toggle('list-active')
  if(catalogButtonImageElement.classList.contains('catalog-active')) {
    catalogButtonTextElement.style.color = '#fff'
  } if(!catalogButtonImageElement.classList.contains('catalog-active')) {
    catalogButtonTextElement.style.color = '#2d3440'
  }

})

window.addEventListener('keydown', (event) => {
  if(event.key === 'Escape') {
    catalogButtonImageElement.classList.remove('catalog-active')
    catalogButtonElement.classList.remove('button-active')
    catalogListElement.classList.remove('list-active')
    catalogButtonTextElement.style.color = '#2d3440'
  }
})


catalogButtonElement.addEventListener('click', (event) => {
  event._isClickWidthInMenu = true
})

catalogListElement.addEventListener('click', (event) => {
  event._isClickWidthInMenu = true
})


bodyElement.addEventListener('click', (event) => {
  if (event._isClickWidthInMenu) return;
  catalogButtonImageElement.classList.remove('catalog-active')
  catalogButtonElement.classList.remove('button-active')
  catalogListElement.classList.remove('list-active')
  catalogButtonTextElement.style.color = '#2d3440'
})