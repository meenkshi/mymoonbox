document.addEventListener('DOMContentLoaded', function (event) {
  const swiper = new Swiper('.swiper.course__swiper', {
    centeredSlides: true,
    spaceBetween: 15,
    slidesPerView: "auto",
    pagination: {
      el: '.course__swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.course__swiper-button-next',
      prevEl: '.course__swiper-button-prev',
    }
  });
});