
const contactsFormElement = document.querySelector('.form')
const contactsBtnElement = document.querySelector('.contacts-form__button')
const contactsFormIconElement = document.querySelector('.form__icon')

contactsBtnElement.addEventListener('click', () => {
  contactsFormElement.classList.toggle('form-active')
})

contactsFormIconElement.addEventListener('click', () => {
  contactsFormElement.classList.remove('form-active')
})

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    contactsFormElement.classList.remove('form-active')
  }
})


document.addEventListener('click', ({target}) => {
  const isClickInsideForm = target.closest('.form')
  const isClickOnButton = target.closest('.contacts-form__button')

  if (!isClickOnButton && !isClickInsideForm) {
    contactsFormElement.classList.remove('form-active')
  }
})
