document.addEventListener('DOMContentLoaded', function (event) {
  // accordion
  {
    let acc = document.getElementsByClassName('course-accordion__item_title');
    let i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener('click', function () {
        this.parentNode.classList.toggle('active');
        this.classList.toggle('active');
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
          panel.classList.remove('active');
        } else {
          panel.classList.add('active');
          panel.style.maxHeight = panel.scrollHeight + 'px';
          console.log(panel.scrollHeight);
        }
      });
    }
  }

  // swiper
  const swiper = new Swiper('.swiper.course-accordion__swiper', {
    spaceBetween: 22,
    slidesPerView: 'auto',
    centeredSlides: false,
    breakpointsBase: 'container'
  });
});