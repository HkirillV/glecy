const body = document.querySelector('body')
const searchBtn = document.querySelector('.navigation-button__search')
const overlayIcon = document.querySelector('.navigation-burger-menu__icon')
const searchForm = document.querySelector('.search')


searchBtn.addEventListener('click', function () {
  searchForm.classList.toggle('overlay-form')
  searchBtn.classList.toggle('overlay-search')
  overlayIcon.classList.toggle('overlay-icon')
})


window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    searchForm.classList.remove('overlay-form')
    searchBtn.classList.remove('overlay-search')
    overlayIcon.classList.remove('overlay-icon')
  }
})


searchBtn.addEventListener('click', (event) => {
  event._isClickWidthInMenu = true
});

searchForm.addEventListener('click', (event) => {
  event._isClickWidthInMenu = true
})


body.addEventListener('click', (event) => {
  if (event._isClickWidthInMenu) return;
  searchForm.classList.remove('overlay-form')
  searchBtn.classList.remove('overlay-search')
  overlayIcon.classList.remove('overlay-icon')
})