'use strict'

const basketMessage = document.querySelector('.basket__message')

export function showErrorMessage(message) {
  basketMessage.innerHTML = `
   Ваша корзина пока пуста
  `
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


export function totalAmountBasket (arr) {
  const cardPrice = document.querySelector('.card__total-price')

  const sum = arr.reduce((acc, el) => {
     return acc + el.price
  },0)

  cardPrice.textContent = `Итого: ${sum} ₽`
}

export function renderWrapperBasket () {
  const basketElement = document.querySelector('.basket')

  return basketElement.innerHTML = `
    <div class="basket__content">
          <div class="basket__title">Корзина</div>
          <div class="basket__list">

          </div>
          <span class="card__border"></span>
          <div class="card__footer">
            <button class="card__button button" type="button">Оформить заказ</button>
            <span class="card__total-price"></span>
          </div>
        </div>
    `
}


