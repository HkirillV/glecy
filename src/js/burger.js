const burgerBtn = document.querySelector('.burger-btn')
const navButton = document.querySelector('.navigation-burger-menu')

burgerBtn.addEventListener('click', function () {
  burgerBtn.classList.toggle('close')
  navButton.classList.toggle('overlay')
})