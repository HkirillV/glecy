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
    prevEl: '.promo-main-slider .swiper-button-prev',
    nextEl: '.promo-main-slider .swiper-button-next',
  },

  on: {
    slideNextTransitionStart: () => {
      promoSecondarySlider.slideNext()
    },
    slidePrevTransitionStart: () => {
      promoSecondarySlider.slidePrev()
    }

  }
});
