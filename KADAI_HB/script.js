$(function(){ 

  $('.l-header__menu').click(function() {
    $('.l-sidebar').toggleClass('is-open');
    $(".js-trigger__cover").css( 'height' , '100%' );
  });

  $('.l-sidebar__btn').click(function() {
    $('.l-sidebar').toggleClass('is-open');
    $(".js-trigger__cover").css( 'height' , '0' );
  });

});

