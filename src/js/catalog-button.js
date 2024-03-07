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