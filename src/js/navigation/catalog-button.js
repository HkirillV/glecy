
const catalogButtonElement = document.querySelector('.navigation-menu__catalog')
const catalogFormElement = document.querySelector('.navigation-menu__catalog-list')

catalogButtonElement.addEventListener('click', () => {
  catalogButtonElement.classList.toggle('active-btn')
  catalogFormElement.classList.toggle('overlay-form')

})

window.addEventListener('keydown', (event) => {
  if(event.key === 'Escape') {
    catalogButtonElement.classList.remove('button-active')
    catalogFormElement.classList.remove('overlay-form')
  }
})


document.addEventListener('click', ({target}) => {
  const isClickInsideForm = target.closest('.navigation-menu__catalog-list')
  const isClickOnButton = target.closest('.navigation-menu__catalog')

  if (!isClickOnButton && !isClickInsideForm) {
    catalogButtonElement.classList.remove('active-btn')
    catalogFormElement.classList.remove('overlay-form')
  }
})