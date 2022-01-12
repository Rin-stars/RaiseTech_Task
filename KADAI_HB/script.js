$(function(){ 

  // ヘッダーのMenuボタンクリック時にサイドバーを開く。
  $('.c-nav__btn--open').click(function() {
    $('.p-sidebar').toggleClass('is-open');
    $('.c-cover').css( 'height' , '100%' );
  });

  // サイドバーの×ボタンクリック時にサイドバーを閉じる。
  $('.c-nav__btn--close').click(function() {
    $('.p-sidebar').toggleClass('is-open');
    $('.c-cover').css( 'height' , '0' );
  });

  // ウィンドウ幅を変更時の処理。サイドバーを閉じる。
  $(window).resize(function(event){
    $('.p-sidebar').removeClass('is-open'); // is-openクラス撤去。
    $('.c-cover').css( 'height' , '0' ); // 灰色背景の撤去。
  });

});

