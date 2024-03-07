const contactsFormElement = document.querySelector('.form')
const contactsBtnElement = document.querySelector('.contacts-form__button')

contactsBtnElement.addEventListener('click', () => {
  contactsFormElement.classList.toggle('form-active')
})