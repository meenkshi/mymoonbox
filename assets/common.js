const announcementWraper = document.getElementById('announcement-bar'),
      announcementBtn = document.querySelector('.announcement-bar__btn'),
      menuBtn = document.querySelector('.burger-menu__btn'),
      menuClose = document.querySelector('.burger-menu__close'),
      body = document.querySelector('body'),
      burgerMenu = document.querySelector('.burger-menu__wrapper');

announcementBtn.addEventListener('click', function () {
  announcementWraper.style.display = 'none';
});

menuBtn.addEventListener('click', function () {
  burgerMenu.classList.add('active');
  body.classList.add('menu__open');
});
menuClose.addEventListener('click', function () {
  burgerMenu.classList.remove('active');
  body.classList.remove('menu__open');
});

const swiperBar = new Swiper('.announcement__swiper', {
  centeredSlides: false,
  loop: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 4000
  }
});

const initAccordion = () => {
  const accordions = document.querySelectorAll('.accordion');

  if (accordions.length) {

    accordions.forEach(accordion => {

      const accordionButtons = accordion.querySelectorAll('.accordion__btn');
      const accordionItems = accordion.querySelectorAll('.accordion__item');

      accordionButtons.forEach(button => {
        const accordionItem = button.closest('.accordion__item');
        const accordionContent = button.closest('.accordion__item').querySelector('.accordion__content');

        button.addEventListener('click', () => {
          accordionItems.forEach(item => {
            if (item.classList.contains('open') && item !== accordionItem) {
              item.classList.remove('open');
              item.querySelector('.accordion__content').style.maxHeight = null;
            }
          });

          if (accordionItem.classList.contains('open')) {
            accordionItem.classList.remove('open');
            accordionContent.style.maxHeight = null;
          } else {
            accordionItem.classList.add('open');
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
          }
          //accordionItem.classList.toggle('open');
          //  accordionContent.style.maxHeight ? accordionContent.style.maxHeight = null : accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
          // accordion.style.height = accordion.scrollHeight + 'px';
        });
      });
    });
  }
};

initAccordion();

const timeoutAction = () => {
  const timeoutWrapper = document.querySelectorAll('.landing-timer');

  if (timeoutWrapper.length) {
    timeoutWrapper.forEach(wrapper => {
      const message = wrapper.querySelector('.landing-timer__message');
      const form = wrapper.querySelector('.product-form');
      const score = wrapper.querySelector('.landing-timer__score');

      function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date());
        let seconds = Math.floor(t / 1000 % 60);
        let minutes = Math.floor(t / 1000 / 60 % 60);
        let hours = Math.floor(t / (1000 * 60 * 60) % 24);
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
          'total': t,
          'days': days,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
        };
      };

      function initializeClock(endtime) {
        const daysSpan = wrapper.querySelector('.days');
        const hoursSpan = wrapper.querySelector('.hours');
        const minutesSpan = wrapper.querySelector('.minutes');
        const secondsSpan = wrapper.querySelector('.seconds');

        function updateClock() {
          let t = getTimeRemaining(endtime);

          daysSpan.innerHTML = t.days + '0';
          hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
          minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
          secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

          if (t.total <= 0) {
            if (!form.classList.contains('hide') && !message.classList.contains('show')) {
              form.classList.add('hide');
              message.classList.add('show');
            } else {
              form.classList.remove('hide');
              message.classList.remove('show');
            }

            clearInterval(timeinterval);
            return true;
          }
        }

        updateClock();
        const timeinterval = setInterval(updateClock, 1000);
      };

      let deadline = new Date(Date.parse(new Date()) + score.value * 60 * 60 * 1000);
      initializeClock(deadline);
    });
  }
};

timeoutAction();

const initDiagram = () => {
  const diagramBlocks = document.querySelectorAll('.landing-diagram');
  const BLOCK_PADDING = 200;

  if (!diagramBlocks.length) {
    return;
  }

  diagramBlocks.forEach(block => {
    const scales = block.querySelectorAll(".landing-diagram__bg");

    if (!scales.length) {
      return;
    }

    window.addEventListener('scroll', () => {
      const topOfBlock = block.offsetTop;
      const bottomOfBlock = block.offsetTop + block.offsetHeight;

      const topOfScreen = window.pageYOffset;
      const bottomOfScreen = window.pageYOffset + window.innerHeight;

      if (topOfBlock + BLOCK_PADDING < bottomOfScreen && bottomOfBlock + BLOCK_PADDING > topOfScreen) {

        scales.forEach(scale => {
          const value = scale.closest('.landing-diagram__bg-wrapper').querySelector('input').value;
          scale.style.maxWidth = value + "%";
        });
      }
    });
  });
};

initDiagram();

// // circle diagramm 
// if (document.querySelectorAll('.landing-diagram__items').length) {
//   const landingItems = document.querySelectorAll('.landing-diagram__item');
//   const block = document.querySelector('.landing-diagram__items');
//   const BLOCK_PADDING = 200;
//   let i;

//   // scroll
//   window.addEventListener('scroll', () => {
//   const topOfBlock = block.offsetTop;
//   const bottomOfBlock = block.offsetTop + block.offsetHeight;
//   const topOfScreen = window.pageYOffset;
//   const bottomOfScreen = window.pageYOffset + window.innerHeight;
//   if ((topOfBlock + BLOCK_PADDING < bottomOfScreen) && (bottomOfBlock + BLOCK_PADDING > topOfScreen) && !i == 1) {

//     block.classList.add('show-block');
//     landingItems.forEach(item => {
//       let circle;
//       if (window.innerWidth >= 768) circle = item.querySelector('.progress-ring__circle');
//       else circle = item.querySelector('.progress-ring__circle.mobile');
//       const progressValue = item.querySelector('input').value;

//       // function 
//       function progressBar() {          
//         let r = circle.r.baseVal.value;
//         let circumference = 2 * Math.PI * r;
//         let percentProgress = 0;
//         circle.style.strokeDasharray = `${circumference} ${circumference}`;
//         circle.style.strokeDashoffset = circumference;
//         progressUp = setInterval(setProgress, 1);

//         function setProgress() {
//           if (percentProgress >= progressValue) {
//             clearInterval(progressUp);
//           } else {
//             percentProgress++;
//             let offset = circumference - percentProgress / 100 * circumference;
//             circle.style.strokeDashoffset = offset;
//           }
//         }
//       }
//       progressBar();
//     });
//     i = 1;
//     }      
//   });
// }

// circle diagramm 
if (document.querySelectorAll('.landing-diagram__items').length) {
  const landingItems = document.querySelectorAll('.landing-diagram__item');
  const block = document.querySelector('.landing-diagram__items');
  const BLOCK_PADDING = 200;
  let i;

  // scroll
  window.addEventListener('scroll', () => {
    const breakpoint = window.matchMedia('(max-width: 768px)');
    const topOfBlock = block.offsetTop;
    const bottomOfBlock = block.offsetTop + block.offsetHeight;
    const topOfScreen = window.pageYOffset;
    const bottomOfScreen = window.pageYOffset + window.innerHeight;

    if (topOfBlock + BLOCK_PADDING < bottomOfScreen && bottomOfBlock + BLOCK_PADDING > topOfScreen && !i == 1) {

      block.classList.add('show-block');
      landingItems.forEach(item => {
        let circle;
        const progressValue = item.querySelector('input').value;

        // function 
        function progressBar() {
          let r = circle.r.baseVal.value;
          let circumference = 2 * Math.PI * r;
          let percentProgress = 0;
          circle.style.strokeDasharray = `${circumference} ${circumference}`;
          circle.style.strokeDashoffset = circumference;
          const progressUp = setInterval(setProgress, 1);

          function setProgress() {
            if (percentProgress >= progressValue) {
              clearInterval(progressUp);
            } else {
              percentProgress++;
              let offset = circumference - percentProgress / 100 * circumference;
              circle.style.strokeDashoffset = offset;
            }
          }
        }

        const breakpointChecker = () => {
          if (breakpoint.matches) {
            circle = item.querySelector('.progress-ring__circle.mobile');
          } else {
            circle = item.querySelector('.progress-ring__circle');
          }
          progressBar();
        };

        breakpoint.addListener(breakpointChecker);
        breakpointChecker();

        progressBar();
      });
      i = 1;
    }
  });
}

const findUserName = () => {
  const userNames = document.querySelectorAll(".url-name");

  if (!userNames.length) {
    return;
  }

  userNames.forEach(userName => {
    const params = window.location.search.replace('?', '').split('&').reduce(function (p, e) {
      const a = e.split('=');
      p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
      return p;
    }, {});

    if (params['name']) {

      if (userName.classList.contains('name-after')) {
        userName.innerHTML = params['name'] + '?..';
      } else {
        userName.innerHTML = params['name'] + ', ';
      }
    }
  });
};

findUserName();

const addToCartAnalitycs = () => {
  const forms = document.querySelectorAll('.product-form');

  if (!forms.length) {
    return;
  }
  document.addEventListener('quizKitAddToCartSuccess', function (e) {
    console.log(e.detail);
    forms.forEach(function (form) {
      const price = (form.querySelector('input[name="product-price"]').value / 100).toFixed(2);
      const variantId = form.querySelector('input[name="product-variant-id"]').value;

      form.addEventListener('submit', function () {
        fetch('https://api.quizkitapp.com/api/v1/quizzes/5824/add-to-cart', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "price": price,
            "variantId": variantId,
            "source": "quiz_result"
          })
        }).then(response => response.json()).then(response => console.log(JSON.stringify(response)));
      });
    });
  }, false);
};

addToCartAnalitycs();