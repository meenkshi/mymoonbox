'use strict';

document.addEventListener('DOMContentLoaded', function (event) {
    const swiper = new Swiper('.swiper.stories__swiper', {
        spaceBetween: 15,
        slidesPerView: 1,
        centeredSlides: false,
        // breakpointsBase: 'container',
        navigation: {
            nextEl: '.stories__next',
            prevEl: '.stories__prev'
        }
    });
});