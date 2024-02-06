const body = document.querySelector('body')
const burgerBtn = document.querySelector('.burger-btn')
const navButton = document.querySelector('.navigation-burger-menu')
const searchForm = document.querySelector('.search')
const searchBtn = document.querySelector('.navigation-button__search')
const overlayIcon = document.querySelector('.navigation-burger-menu__icon')

burgerBtn.addEventListener('click', function () {
  burgerBtn.classList.toggle('close')
  navButton.classList.toggle('overlay')
  if(!burgerBtn.classList.contains('close')) {
    searchForm.classList.remove('overlay-form')
    overlayIcon.classList.remove('overlay-icon')
    searchBtn.classList.remove('overlay-search')
  }
})

//Закрыть меню при нажатии на Esc
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    navButton.classList.remove('overlay')
    burgerBtn.classList.remove('close')
  }
})

//Закрыть меню при клике вне его
navButton.addEventListener('click', (event) => {
  event._isClickWidthInMenu = true
});

burgerBtn.addEventListener('click', (event) => {
  event._isClickWidthInMenu = true
})

body.addEventListener('click', (event) => {
   if (event._isClickWidthInMenu) return;

  navButton.classList.remove('overlay')
  burgerBtn.classList.remove('close')
})