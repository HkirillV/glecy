const body = document.querySelector('body')
const header = document.querySelector('header')
const burgerBtn = document.querySelector('.burger-btn')
const navButton = document.querySelector('.navigation-burger-menu')

burgerBtn.addEventListener('click', function () {
  burgerBtn.classList.toggle('close')
  navButton.classList.toggle('overlay')
})

//Закрыть меню при нажатии на Esc
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    document.querySelector('.navigation-burger-menu').classList.remove('overlay')
    document.querySelector('.burger-btn').classList.remove('close')
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

  document.querySelector('.navigation-burger-menu').classList.remove('overlay')
  document.querySelector('.burger-btn').classList.remove('close')
})