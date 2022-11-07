document.addEventListener('DOMContentLoaded', function (event) {
  const countSlide = document.querySelector('.carousel-collection__slider');
  const options = {
    slidesPerView: 'auto',
    loopedSlides: +countSlide.dataset.swiperCountSlide,
    centeredSlides: false,
    watchSlidesProgress: true,
    loop: true,
    speed: 800,
    spaceBetween: 0,
    navigation: {
      nextEl: '.carousel-collection__button-next',
      prevEl: '.carousel-collection__button-prev'
    }
  };

  const sw = new Swiper('.carousel-collection__slider', options);
});