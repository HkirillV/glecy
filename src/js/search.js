const searchBtn = document.querySelector('.navigation-button__search')
const searchForm = document.querySelector('.search__form')


searchBtn.addEventListener('click', function () {
  searchForm.classList.toggle('overlay-form')
})