$(function() {

  $('.m-menu').on('click', function() {
    $(this).parents('header').toggleClass('menuopen');
  });

  if ($(window).width() < 768) {
    var rateItemW = 0;
    $('.rate-item').each(function(i) {
      rateItemW += $(this).outerWidth();
      $('.rate-wrap').width(rateItemW+5);
    });
  }

});