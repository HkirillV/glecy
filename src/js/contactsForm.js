const bodyElement = document.querySelector('body')
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


contactsFormElement.addEventListener('click', (event) => {
  event._isClickWidthInMenu = true
});

contactsBtnElement.addEventListener('click', (event) => {
  event._isClickWidthInMenu = true
})

bodyElement.addEventListener('click', (event) => {
  if(event._isClickWidthInMenu) return;
  contactsFormElement.classList.remove('form-active')
})
