document.addEventListener('DOMContentLoaded', function (event) {
  const options = {
    slidesPerView: 'auto',
    centeredSlides: false,
    watchSlidesProgress: true,
    loop: true,
    speed: 400,
    spaceBetween: 15,

    breakpoints: {
      // when window width is >= 640px
      1230: {
        spaceBetween: 30
      }
    },
    navigation: {
      nextEl: '.feedbacks-gallery__carousel-button-next',
      prevEl: '.feedbacks-gallery__carousel-button-prev'
    }
  };

  const sw = new Swiper('.feedbacks-gallery__carousel', options);

  sw.on('init', function (e) {
    console.log('slide changed', e);
  });

  sw.on('slideChange', function (e) {
    const allTextDiv = document.querySelectorAll('.feedbacks-gallery__text');

    for (let i = 0; i < allTextDiv.length; i++) {
      const element = allTextDiv[i];

      element.style.display = 'none';

      if (element.classList.contains(`feedbacks-gallery__text--${e.realIndex}`)) {
        element.style.display = 'block';
      }
    }
  });
});