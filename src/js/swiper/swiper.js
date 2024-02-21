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


promoMainSlider.on('transitionEnd', function (e) {
  if(this.realIndex === 0){
    document.querySelector("body").style.backgroundColor = '#feafc3';
    document.querySelector(".swiper-slide__image-background").style.backgroundColor = '#ffcbd8';
    document.querySelectorAll(".promo-secondary-slider__image-background").backgroundColor = '#ffcbd8';
  }
  if(this.realIndex === 1){
    document.querySelector("body").style.background = '#69a9ff';
    document.querySelector(".swiper-slide__image-background").style.backgroundColor = '#9fc8ff';
    document.querySelectorAll(".promo-secondary-slider__image-background").backgroundColor = '#9fc8ff';
  }
  if(this.realIndex === 2){
    document.querySelector("body").style.background = '#fcc850';
    document.querySelector(".swiper-slide__image-background").style.backgroundColor = '#fcdc92';
    document.querySelectorAll(".promo-secondary-slider__image-background").backgroundColor = '#fcdc92';
  }
});
