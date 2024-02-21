const catalogButtonElement = document.querySelector('.navigation-menu__catalog')
const catalogButtonImageElement = document.querySelector('.navigation-menu__icon')
const catalogButtonTextElement = document.querySelector('.navigation-menu__text')

catalogButtonElement.addEventListener('click', () => {
  catalogButtonImageElement.classList.toggle('catalog-active')
  catalogButtonTextElement.classList.toggle('catalog-active')
})