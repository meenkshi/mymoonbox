document.addEventListener('DOMContentLoaded', function (event) {  
    // swiper
    const swiper = new Swiper('.featured-blog__slider', {
      spaceBetween: 20,
      slidesPerView: 'auto',
      centeredSlides: false,
      breakpointsBase: 'container'
    });
  });