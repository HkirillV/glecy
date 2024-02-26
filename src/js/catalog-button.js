const catalogButtonElement = document.querySelector('.navigation-menu__catalog')
const catalogButtonImageElement = document.querySelector('.navigation-menu__icon')
const catalogButtonTextElement = document.querySelector('.navigation-menu__text')

catalogButtonElement.addEventListener('click', () => {
  catalogButtonImageElement.classList.toggle('catalog-active')
  if(catalogButtonImageElement.classList.contains('catalog-active')) {
    catalogButtonTextElement.style.color = '#fff'
  } if(!catalogButtonImageElement.classList.contains('catalog-active')) {
    catalogButtonTextElement.style.color = '#2d3440'
  }
})