'use strict'

import {
  showErrorMessage,
  setBasketLocalStorage,
  getBasketLocalStorage,
  checkingRelevanceValueBasket
} from "./function.js";

import {
  COUNT_SHOW_CARDS_CLICK,
  ERROR_SERVER,
  NO_PRODUCTS_IN_THIS_CATEGORY
} from "./constants.js";


const cards = document.querySelector('.list')
const btnShowCards = document.querySelector('.show-cards')
let showCards = COUNT_SHOW_CARDS_CLICK
let countClickBtnShowCards = 1
let productsData = []

getProducts()

btnShowCards.addEventListener('click', sliceArrCards)

async function getProducts() {
  try {
    if (!productsData.length) {
      const res = await fetch('/data/products.json')
      if (!res.ok) {
        throw new Error(res.statusText)
      }
      productsData = await res.json()
    }
    if ((productsData.length > showCards) &&
      btnShowCards.classList.contains('none')) {
      btnShowCards.classList.remove('none')
    }

    renderStartPage(productsData)

  } catch (error) {
    showErrorMessage(ERROR_SERVER)
    console.log(error)
  }
}

function renderStartPage(data) {
  if (!data || !data.length) {
    return showErrorMessage(NO_PRODUCTS_IN_THIS_CATEGORY)
  }

  const arrCards = data.slice(0, COUNT_SHOW_CARDS_CLICK)
  createCards(arrCards)
}

function sliceArrCards() {
  if (showCards >= productsData.length) {
    return
  }
  countClickBtnShowCards++
  const countShowCard = COUNT_SHOW_CARDS_CLICK * countClickBtnShowCards

  const arrCards = productsData.slice(showCards, countShowCard)
  createCards(arrCards)
  showCards = cards.children.length

   if(showCards >= productsData.length) {
     btnShowCards.classList.add('none')
   }
}


function createCards(data) {
  data.forEach(card => {
    const {id, img, title, price} = card
    // const priceDiscount = price - ((price * discount) / 100)
    const cardItem =
      `
      <div class="list-card" data-product-id="${id}">
        <img class="list-card__image" src="/data/image/${img}" width="168" height="168" loading="lazy"
             alt="${title}">
        <div class="list-card__description">
          <h4 class="list-card__title">${title}</h4>
          <p class="list-card__text">Фисташковый пломбир <br> с кусочками шоколада</p>
          <div class="price">
            <p class="price__text">${price}₽/кг</p>
            <button class="price__button" type="button">
              <img src="./src/img/catalog/Cart.svg" width="16" height="16" loading="lazy" alt="/">
            </button>
          </div>
        </div>
      </div>
      `
    cards.insertAdjacentHTML('beforeend', cardItem)
  })
}
