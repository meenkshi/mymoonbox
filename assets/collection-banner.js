document.addEventListener('DOMContentLoaded', function (event) {

    // ticker
    $('.marquee').marquee({
        pauseOnHover: false,
        allowCss3Support: false,
        duration: 5000,
        css3easing: false,
        startVisible: true,
        easing: 'linear',
      });
});