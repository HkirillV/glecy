

const basketBtnElement = document.querySelector('.navigation-button__basket')
const basketFormElement = document.querySelector('.basket')


basketBtnElement.addEventListener('click', () => {
  basketBtnElement.classList.toggle('active-btn')
  basketFormElement.classList.toggle('overlay-form')

})


window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    basketBtnElement.classList.remove('active-btn')
    basketFormElement.classList.remove('overlay-form')
  }
})


document.addEventListener('click', ({target}) => {
  const isClickInsideForm = target.closest('.basket')
  const isClickOnButton = target.closest('.navigation-button__basket')

  if (!isClickOnButton && !isClickInsideForm) {
    basketBtnElement.classList.remove('active-btn')
    basketFormElement.classList.remove('overlay-form')
  }
})

