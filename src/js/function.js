
export const overlayForm = (overlayForm, overlayRed, overlayWhite) => {
  overlayForm.classList.toggle('overlay-form')
  overlayRed.classList.toggle('overlay-red')
  overlayWhite.classList.toggle('overlay-white')
}

export const removeForm = (removeForm, removeRed, removeWhite) => {
  removeForm.classList.remove('overlay-form')
  removeRed.classList.remove('overlay-red')
  removeWhite.classList.remove('overlay-white')
}