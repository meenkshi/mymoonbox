setTimeout(function() {
    var $ = jQuery;
	$('.marquee').marquee({
    pauseOnHover: true,
    allowCss3Support: false,
    duration: 30000,
    css3easing: false,
    startVisible: true
      });
},2000);