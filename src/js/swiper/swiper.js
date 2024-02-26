const promoSecondarySlider = new Swiper('.promo-secondary-slider', {

  loop: true,
  slidesPerView: 2,
  allowTouchMove: false,

});

const promoMainSlider = new Swiper('.promo-main-slider', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.promo-main-slider .swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    prevEl: '.promo-main-slider .swiper-button-next',
    nextEl: '.promo-main-slider .swiper-button-prev',
  },


  on: {
    slideNextTransitionStart: () => {
      promoSecondarySlider.slideNext()
    },
    slidePrevTransitionStart: () => {
      promoSecondarySlider.slidePrev()
    },
  }
});

const bodyElement = document.querySelector('body')

promoMainSlider.on('transitionEnd', function (event) {
  if(this.realIndex === 0){
    document.querySelector("body").style.backgroundColor = '#feafc3';
    document.querySelector("#slider-1").style.backgroundColor = '#ffcbd8';
    document.querySelector("#slider-2").style.backgroundColor = '#ffcbd8';
    document.querySelector('.swiper-slide__button').style.border = 'rgba(255, 47, 100, 0.30) 4px solid'
  }
  if(this.realIndex === 1){
    document.querySelector("body").style.background = '#69a9ff';
    document.querySelector("#slider-2").style.backgroundColor = '#9fc8ff';
    document.querySelector("#slider-3").style.backgroundColor = '#9fc8ff';
    document.querySelector('.swiper-slide__button').style.border = 'rgba(72,170,224,0.73) 4px solid'
  }
  if(this.realIndex === 2){
    document.querySelector("body").style.background = '#fcc850';
    document.querySelector("#slider-1").style.backgroundColor = '#fcdc92';
    document.querySelector("#slider-3").style.backgroundColor = '#fcdc92';
    document.querySelector('.swiper-slide__button').style.border = 'rgba(231,246,135,0.53) 4px solid'
  }
});
