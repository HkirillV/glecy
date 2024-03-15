const overlayColorIconElement = document.querySelector('.icon-white')
const overlayColorTextElement = document.querySelector('.navigation-burger-menu__text')
const loginBtnElement = document.querySelector('.navigation-button__login')
const authorizationFormElement = document.querySelector('.authorization')


loginBtnElement.addEventListener('click', function () {
  loginBtnElement.classList.toggle('active-btn')
  authorizationFormElement.classList.toggle('overlay-form')
})


window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    loginBtnElement.classList.remove('active-btn')
    authorizationFormElement.classList.remove('overlay-form')
  }
})


document.addEventListener('click', ({target}) => {
  const isClickInsideForm = target.closest('.authorization')
  const isClickOnButton = target.closest('.navigation-button__login')

  if (!isClickOnButton && !isClickInsideForm) {
    loginBtnElement.classList.remove('active-btn')
    authorizationFormElement.classList.remove('overlay-form')
  }
})