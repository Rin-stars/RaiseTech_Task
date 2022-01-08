$(function(){ 

  $('.l-header__menu').click(function() {
    $('.p-sidebar').toggleClass('is-open');
    $(".l-header__cover").css( 'height' , '100%' );
  });

  $('.p-sidebar__btn').click(function() {
    $('.p-sidebar').toggleClass('is-open');
    $(".l-header__cover").css( 'height' , '0' );
  });

  // ウィンドウ幅を変更時の処理。サイドバーを閉じる。
  $(window).resize(function(event){
    $('.p-sidebar').removeClass('is-open'); // is-openクラス撤去。
    $(".l-header__cover").css( 'height' , '0' ); // 灰色背景の撤去。
  });

});

