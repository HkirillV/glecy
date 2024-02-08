
export const overlayForm = (overlayForm, overlayColorRed, overlayColorWhite, overlayColorText) => {
  overlayForm.classList.toggle('overlay-form')
  overlayColorRed.classList.toggle('overlay-red')
  overlayColorWhite.classList.toggle('overlay-white')
  overlayColorText.classList.toggle('overlay-white')
}

export const removeForm = (removeForm, removeColorRed, removeColorWhite, overlayColorText) => {
  removeForm.classList.remove('overlay-form')
  removeColorRed.classList.remove('overlay-red')
  removeColorWhite.classList.remove('overlay-white')
  overlayColorText.classList.remove('overlay-white')
}