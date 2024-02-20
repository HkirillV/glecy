
export const overlayFormElement = (overlayFormElement, overlayColorRedElement, overlayColorIconElement, overlayColorTextElement) => {
  overlayFormElement.classList.toggle('overlay-form')
  overlayColorRedElement.classList.toggle('overlay-red')
  overlayColorIconElement.classList.toggle('overlay-white-icon')
  overlayColorTextElement.classList.toggle('overlay-white-text')
}

export const removeFormElement = (removeFormElement, removeColorRedElement, removeColorIconElement, removeColorTextElement) => {
  removeFormElement.classList.remove('overlay-form')
  removeColorRedElement.classList.remove('overlay-red')
  removeColorIconElement.classList.remove('overlay-white-icon')
  removeColorTextElement.classList.remove('overlay-white-text')
}