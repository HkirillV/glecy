
export const overlayForm = (overlayForm, overlayColorRed, overlayColorIcon, overlayColorText) => {
  overlayForm.classList.toggle('overlay-form')
  overlayColorRed.classList.toggle('overlay-red')
  overlayColorIcon.classList.toggle('overlay-white-icon')
  overlayColorText.classList.toggle('overlay-white-text')
}

export const removeForm = (removeForm, removeColorRed, removeColorIcon, removeColorText) => {
  removeForm.classList.remove('overlay-form')
  removeColorRed.classList.remove('overlay-red')
  removeColorIcon.classList.remove('overlay-white-icon')
  removeColorText.classList.remove('overlay-white-text')
}