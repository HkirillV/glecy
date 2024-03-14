'use strict'
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


export function showErrorMessage(message) {
  const h2 = document.querySelector('.catalog')
  const msg =
    `<div class="error">
        <p>${message}</p>
        <p><a href="/">Перейти к списку товаров!</a></p>
    </div>`
  h2.insertAdjacentHTML('afterend', msg)
}

export function getBasketLocalStorage() {
  const cartDataJSON = localStorage.getItem('basket')
  return cartDataJSON ? JSON.parse(cartDataJSON) : []
}

export function setBasketLocalStorage(basket) {
  const basketCount = document.querySelector('.basket__count')
  localStorage.setItem('basket', JSON.stringify(basket))
  basketCount.textContent = basket.length
}


export function checkingRelevanceValueBasket(productsData) {
  const basket = getBasketLocalStorage()

  basket.forEach((basketId, index) => {
    const existsInProducts = productsData.some(item => item.id === Number(basketId))
    if(!existsInProducts) {
      basket.splice(index, 1)
    }
  })

  setBasketLocalStorage(basket)
}