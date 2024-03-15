


const searchBtnElement = document.querySelector('#search-button')
const overlayIconElement = document.querySelector('.navigation-burger-menu__icon')
const overlayColorIconElement = document.querySelector('.icon-white')
const searchFormElement = document.querySelector('.search')



searchBtnElement.addEventListener('click', function () {
  searchBtnElement.classList.toggle('active-btn')
  searchFormElement.classList.toggle('overlay-form')


})


window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    searchBtnElement.classList.remove('active-btn')
    searchFormElement.classList.remove('overlay-form')
  }
})


document.addEventListener('click', ({target}) => {
  const isClickInsideForm = target.closest('.search')
  const isClickOnButton = target.closest('#search-button')

  if (!isClickOnButton && !isClickInsideForm) {
    searchBtnElement.classList.remove('active-btn')
    searchFormElement.classList.remove('overlay-form')
  }
})

