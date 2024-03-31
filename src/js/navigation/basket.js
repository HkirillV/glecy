'use strict'

import {ERROR_SERVER, NO_ITEMS_CARD} from "../constants.js";
import {
  showErrorMessage,
  setBasketLocalStorage,
  getBasketLocalStorage,
  checkingRelevanceValueBasket,
  totalAmountBasket,
  renderWrapperBasket,
  setEmptyBasketMessage
} from "../function.js";


const basketBtnElement = document.querySelector('.navigation-button__basket')
const basketBodyElement = document.querySelector('.basket__body')
const basketFormElement = document.querySelector('.basket')


basketBtnElement.addEventListener('click', () => {
  basketBtnElement.classList.toggle('active-btn')
  basketFormElement.classList.toggle('overlay-form')

})


window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    basketBtnElement.classList.remove('active-btn')
    basketFormElement.classList.remove('overlay-form')
  }
})


document.addEventListener('click', ({target}) => {
  const isClickInsideForm = target.closest('.basket')
  const isClickOnButton = target.closest('.navigation-button__basket')
  const isClickCloseButton = target.closest('.card__close')

  if (!isClickOnButton && !isClickInsideForm && !isClickCloseButton) {
    basketBtnElement.classList.remove('active-btn')
    basketFormElement.classList.remove('overlay-form')
  }
})

const basket = document.querySelector('.basket')
const basketMessage = document.querySelector('.basket__message')

let productData = []

getProducts()


basket.addEventListener('click', delProductBasket)


async function getProducts() {
  try {
    if (!productData.length) {
      const res = await fetch('http://localhost:3000/products')
      if (!res.ok) {
        throw new Error(res.statusText)
      }
      productData = await res.json()
    }

    loadProductsBasket()

  } catch (err) {
    showErrorMessage(ERROR_SERVER)
    console.log(err.message)
  }
}

setEmptyBasketMessage()


export function loadProductsBasket() {

  if (!productData || !productData.length) {
    showErrorMessage(ERROR_SERVER)
    return
  }

  checkingRelevanceValueBasket(productData)

  const basket = getBasketLocalStorage()

  if (!basket || !basket.length) {
    showErrorMessage(NO_ITEMS_CARD)
  }

  const findProducts = productData.filter(item => basket.includes(String(item.id)))

  if (!findProducts || !findProducts.length) {
    showErrorMessage(NO_ITEMS_CARD)
  }


  renderWrapperBasket()
  totalAmountBasket(findProducts)
  renderProductsBasket(findProducts)
}

function delProductBasket(event) {
  const targetButton = event.target.closest('.card__close')
  if (!targetButton) {
    return
  }

  const card = targetButton.closest('.card')
  const id = card.dataset.productId
  const basket = getBasketLocalStorage()


  const newBasket = basket.filter(item => item !== id)
  setBasketLocalStorage(newBasket)


  loadProductsBasket()
}


function renderProductsBasket(arr) {

  if (arr.length === 0) {
    setEmptyBasketMessage()
    return
  }

  const basketListElement = document.querySelector('.basket__list')

  basketMessage.innerHTML = ''

  basketListElement.innerHTML = arr.reduce((acc, el) => {
    const {id, img, title, price} = el

    const item = `
      <div class="card" data-product-id="${id}">
            <div class="card__wrapper">
                <div class="card__image">
                  <img src="/data/image/${img}" width="46" height="46" loading="lazy" alt="${title}">
                </div>
                <div class="card__item">
                  <div class="card__title">${title}</div>
                  <div class="card__text">1кг х ${price}</div>
                </div>
           </div>
           
           <div class="card__price">${price} ₽</div>
           <div class="card__close"><img src="/src/img/basket/Union.svg" width="10" height="10" loading="lazy" alt="close"></div>
      </div>
      `
    return acc + item
  }, '')

}




