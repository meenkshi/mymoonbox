document.addEventListener('DOMContentLoaded', function (event) {

  let tabItemFirst = document.querySelector('.faq-content__tabs_item'),
    accItemFirst = document.querySelector('.faq-content__container');

  tabItemFirst.classList.add('active');
  accItemFirst.classList.add('active');

  //  added data-tab for tabs button
  const tabItem = document.querySelectorAll('.faq-content__tabs_item');
  for (let i = 0; i < tabItem.length; i++) {
    tabItem[i].setAttribute('data-tab', i);
  }

  // added data-tab-content for tabs content
  const accItem = document.querySelectorAll('.faq-content__container');
  for (let i = 0; i < accItem.length; i++) {
    accItem[i].setAttribute('data-tab-content', i);
  }


  // show of hide content
  for (var t = 0; t < tabItem.length; t++) {

    tabItem[t].addEventListener('click', function (e) {
      e.preventDefault();
      var activeTabAttr = e.target.getAttribute('data-tab');

      for (var j = 0; j < tabItem.length; j++) {
        var contentAttr = accItem[j].getAttribute('data-tab-content');

        if (activeTabAttr === contentAttr) {
          tabItem[j].classList.add('active');
          accItem[j].classList.add('active');
        } else {
          tabItem[j].classList.remove('active');
          accItem[j].classList.remove('active');
        }
      };
    });
  }

  // accordion

  let panelBtn = document.querySelectorAll('.faq-content__accordion_panel');
  let a;
  for (a = 0; a < panelBtn.length; a++) {
    panelBtn[a].addEventListener('click', function () {
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
});