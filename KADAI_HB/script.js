$(function(){ 

  $('.c-button--open').click(function() {
    $('.p-sidebar').toggleClass('is-open');
    $('.c-body__cover').css( 'height' , '100%' );
  });

  $('.c-button--close').click(function() {
    $('.p-sidebar').toggleClass('is-open');
    $('.c-body__cover').css( 'height' , '0' );
  });

  // ウィンドウ幅を変更時の処理。サイドバーを閉じる。
  $(window).resize(function(event){
    $('.p-sidebar').removeClass('is-open'); // is-openクラス撤去。
    $('.c-body__cover').css( 'height' , '0' ); // 灰色背景の撤去。
  });

});

