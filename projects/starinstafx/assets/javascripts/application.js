$(function() {

  $('.m-menu').on('click', function() {
    $(this).parents('header').toggleClass('menuopen');
  });

  if ($(window).width() < 768) {
    $('.rate-wrap').slick({
      speed: 5000,
      autoplay: true,
      autoplaySpeed: 0,
      centerMode: true,
      cssEase: 'linear',
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      infinite: true,
      initialSlide: 1,
      arrows: false,
      buttons: false
    });
  }

});