'use strict'



export function showErrorMessage(message) {
  const h2 = document.querySelector('.basket')
  const msg =
    `
    <p class="basket__title">Ваша корзина пока <br> пуста</p>
    `
  h2.insertAdjacentHTML('beforeend', msg)

  const basketContent = document.querySelector('.basket__content')
  basketContent.classList.add('none')
  console.log(message)
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


export function sumPrice (arr) {
  const cardPrice = document.querySelector('.card__total-price')

  const sum = arr.reduce((acc, el) => {
     return acc + el.price
  },0)

  cardPrice.textContent = `Итого: ${sum} ₽`

}


