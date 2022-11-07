document.addEventListener('DOMContentLoaded', function () {
  const popupWrap = document.querySelector('.additional-info__popup'),
    popupBtn = document.querySelector('.additional-info__button'),
    bodyPop = document.querySelector('body');
  popupClose = document.querySelector('.additional-info__popup_close');
  popupBtn.addEventListener('click', function () {
    if (popupWrap.style.display = 'none') {
      popupWrap.style.display = 'block';
      bodyPop.classList.add('body-popup');
    }
  })
  popupClose.addEventListener('click', function () {
    if (popupWrap.style.display = 'block') {
      popupWrap.style.display = 'none';
      bodyPop.classList.remove('body-popup');
    }
  })
});