document.addEventListener('DOMContentLoaded', function () {
  const landingSlider = document.querySelector('.landing-slider__slider');
  const options = {
    loop: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.5,
        spaceBetween: 40
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 4.5,
        spaceBetween: 40
      }
    },
    navigation: {
      nextEl: '.landing-slider__button-next',
      prevEl: '.landing-slider__button-prev'
    }
  };

  const swiper = new Swiper(landingSlider, options);
});