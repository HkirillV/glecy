'use strict'



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
  if(!basket || !basket.length) {
    basketCount.textContent = 'Нет товаров'
    return
  }

  basketCount.textContent = basket.length + ' товара';

  const authorizationFormElement =  document.querySelector('.authorization')
  const searchFormElement = document.querySelector('.search')
  authorizationFormElement.style.right = '141px'
  searchFormElement.style.right = '245px'
}


export function checkingRelevanceValueBasket(productsData) {
  const basket = getBasketLocalStorage()

  basket.forEach((basketId, index) => {
    const existsInProducts = productsData.some(item => item.id === Number(basketId))
    if (!existsInProducts) {
      basket.splice(index, 1)
    }
  })

  setBasketLocalStorage(basket)
}