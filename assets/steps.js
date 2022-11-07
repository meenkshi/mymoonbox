document.addEventListener('DOMContentLoaded', function () {
    const popupWrapOne = document.querySelector('.steps__popup_one'),
      popupBtnOne = document.querySelector('.steps-first__popup'),
      popupCloseOne = document.querySelector('.additional-info__popup_close.steps_one'),
      popupWrapTwo = document.querySelector('.steps__popup_two'),
      popupBtnTwo = document.querySelector('.steps-second__popup'),
      popupCloseTwo = document.querySelector('.additional-info__popup_close.steps_two'),
      popupWrapThree = document.querySelector('.steps__popup_three'),
      popupBtnThree = document.querySelector('.steps-third__popup'),
      popupCloseThree = document.querySelector('.additional-info__popup_close.steps_three');
      bodyPop = document.querySelector('body');
    if (popupWrapOne != null) {
      popupBtnOne.addEventListener('click', function () {
        if (popupWrapOne.style.display = 'none') {
          popupWrapOne.style.display = 'block';
          bodyPop.classList.add('body-popup');
        }
      })
      popupCloseOne.addEventListener('click', function () {
        if (popupWrapOne.style.display = 'block') {
          popupWrapOne.style.display = 'none';
          bodyPop.classList.remove('body-popup');
        }
      })
    };
    if (popupWrapTwo != null) {
      popupBtnTwo.addEventListener('click', function () {
        if (popupWrapTwo.style.display = 'none') {
          popupWrapTwo.style.display = 'block';
          bodyPop.classList.add('body-popup');
        }
      })
      popupCloseTwo.addEventListener('click', function () {
        if (popupWrapTwo.style.display = 'block') {
          popupWrapTwo.style.display = 'none';
          bodyPop.classList.remove('body-popup');
        }
      })
    };
    if (popupWrapThree != null) {
      popupBtnThree.addEventListener('click', function () {
        if (popupWrapThree.style.display = 'none') {
          popupWrapThree.style.display = 'block';
          bodyPop.classList.add('body-popup');
        }
      })
      popupCloseThree.addEventListener('click', function () {
        if (popupWrapThree.style.display = 'block') {
          popupWrapThree.style.display = 'none';
          bodyPop.classList.remove('body-popup');
        }
      })
    };
  });