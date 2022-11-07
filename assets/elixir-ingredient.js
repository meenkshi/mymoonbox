document.addEventListener('DOMContentLoaded', function () {
  const popupWrapOne = document.querySelector('.elixir-ingredient__popup_one'),
    popupBtnOne = document.querySelector('.first__popup'),
    popupCloseOne = document.querySelector('.additional-info__popup_close.one'),
    popupWrapTwo = document.querySelector('.elixir-ingredient__popup_two'),
    popupBtnTwo = document.querySelector('.second__popup'),
    popupCloseTwo = document.querySelector('.additional-info__popup_close.two'),
    popupWrapThree = document.querySelector('.elixir-ingredient__popup_three'),
    popupBtnThree = document.querySelector('.third__popup'),
    popupCloseThree = document.querySelector('.additional-info__popup_close.three'),
    popupWrapFour = document.querySelector('.elixir-ingredient__popup_four'),
    popupBtnFour = document.querySelector('.fourth__popup'),
    popupCloseFour = document.querySelector('.additional-info__popup_close.four'),
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
  if (popupWrapFour != null) {
    popupBtnFour.addEventListener('click', function () {
      if (popupWrapFour.style.display = 'none') {
        popupWrapFour.style.display = 'block';
        bodyPop.classList.add('body-popup');
      }
    })
    popupCloseFour.addEventListener('click', function () {
      if (popupWrapFour.style.display = 'block') {
        popupWrapFour.style.display = 'none';
        bodyPop.classList.remove('body-popup');
      }
    })
  }
});