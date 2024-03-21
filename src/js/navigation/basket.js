'use strict'

import {ERROR_SERVER, NO_ITEMS_CARD} from "../constants.js";
import {
  showErrorMessage,
  setBasketLocalStorage,
  getBasketLocalStorage,
  checkingRelevanceValueBasket,
  sumPrice
  // renderWrapperBasket
} from "../function.js";

import {
  handleCardClick
} from '../catalog.js'

const basketBtnElement = document.querySelector('.navigation-button__basket')
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

  if (!isClickOnButton && !isClickInsideForm) {
    basketBtnElement.classList.remove('active-btn')
    basketFormElement.classList.remove('overlay-form')
  }
})





const card = document.querySelector('.basket__list')
const basketContent = document.querySelector('.basket__content')



let productData = []

getProducts()


card.addEventListener('click', delProductBasket)



async function getProducts() {
  try {
    if (!productData.length) {
      const res = await fetch('/data/products.json')
      if (!res.ok) {
        throw new Error(res.statusText)
      }
      productData = await res.json()
    }

    loadProductsBasket(productData)

  } catch (err) {
    showErrorMessage(ERROR_SERVER)
    console.log(err.message)
  }
}



function loadProductsBasket(data) {
  card.textContent = ''


  if (!data || !data.length) {
    showErrorMessage(ERROR_SERVER)
    return
  }

  checkingRelevanceValueBasket(data)
  const basket = getBasketLocalStorage()

  if (!basket || !basket.length) {
    showErrorMessage(NO_ITEMS_CARD)
    return;
  }

  const findProducts = data.filter(item => basket.includes(String(item.id)))

  if (!findProducts.length) {
    showErrorMessage(NO_ITEMS_CARD)
    return;
  }


  basketContent.classList.remove('none')
  sumPrice(findProducts)
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

  getProducts()
}



function renderProductsBasket(arr) {
  arr.forEach(el => {
    const {id, img, title, price} = el

    const cardItem =
      `
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
    card.insertAdjacentHTML('beforeend', cardItem)
  })
}
