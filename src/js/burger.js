const bodyElement = document.querySelector('body')
const burgerBtnElement = document.querySelector('.burger-btn')
const navButtonElement = document.querySelector('.navigation-burger-menu')
const searchFormElement = document.querySelector('.search')
const searchBtnElement = document.querySelector('.navigation-button__search')
const overlayIconElement = document.querySelector('.navigation-burger-menu__icon')

burgerBtnElement.addEventListener('click', function () {
  burgerBtnElement.classList.toggle('close')
  navButtonElement.classList.toggle('overlay')
  if(!burgerBtnElement.classList.contains('close')) {
    searchFormElement.classList.remove('overlay-red')
    overlayIconElement.classList.remove('overlay-white')
    searchBtnElement.classList.remove('overlay-form')
  }
})

//Закрыть меню при нажатии на Esc
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    navButtonElement.classList.remove('overlay')
    burgerBtnElement.classList.remove('close')
  }
})

//Закрыть меню при клике вне его
navButtonElement.addEventListener('click', (event) => {
  event._isClickWidthInMenu = true
});

burgerBtnElement.addEventListener('click', (event) => {
  event._isClickWidthInMenu = true
})

bodyElement.addEventListener('click', (event) => {
   if (event._isClickWidthInMenu) return;

  navButtonElement.classList.remove('overlay')
  burgerBtnElement.classList.remove('close')
})