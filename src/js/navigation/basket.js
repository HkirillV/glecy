'use strict'

import {ERROR_SERVER, NO_ITEMS_CARD} from "../constants.js";
import {
  showErrorMessage,
  setBasketLocalStorage,
  getBasketLocalStorage,
  checkingRelevanceValueBasket,
  totalAmountBasket,
  renderWrapperBasket
} from "../function.js";


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

const basket = document.querySelector('.basket')
const basketMessage = document.querySelector('.basket__message')

let productData = []

getProducts()


basket.addEventListener('click', delProductBasket)



async function getProducts() {
  try {
    if (!productData.length) {
      const res = await fetch('/data/products.json')
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


export  function loadProductsBasket() {
  basketMessage.innerHTML =  `
  Ваша корзина пока <br> пуста
  `

  if (!productData || !productData.length) {
    showErrorMessage(ERROR_SERVER)
    return
  }

  checkingRelevanceValueBasket(productData)

  const basket = getBasketLocalStorage()

  if (!basket || !basket.length) {
    showErrorMessage(NO_ITEMS_CARD)
    return;
  }

  const findProducts = productData.filter(item => basket.includes(String(item.id)))

  if (!findProducts || !findProducts.length) {
    showErrorMessage(NO_ITEMS_CARD)
    return;
  }
 console.log(findProducts)

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
  const card = document.querySelector('.basket__list')

   card.innerHTML = arr.reduce((acc, el) => {
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




