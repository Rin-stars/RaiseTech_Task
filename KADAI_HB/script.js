$(function(){ 

  // ヘッダーのMenuボタンクリック時にサイドバーを開く。
  $('.c-btn--nav-open').click(function() {
    $('.l-sidebar').toggleClass('is-open');
    $('.p-nav__bg').css( 'height' , '100%' );
  });

  // サイドバーの×ボタンクリック時にサイドバーを閉じる。
  $('.c-btn--nav-close').click(function() {
    $('.l-sidebar').toggleClass('is-open');
    $('.p-nav__bg').css( 'height' , '0' );
  });

  // ウィンドウ幅を変更時の処理。サイドバーを閉じる。
  $(window).resize(function(event){
    $('.l-sidebar').removeClass('is-open'); // is-openクラス撤去。
    $('.p-nav__bg').css( 'height' , '0' ); // 灰色背景の撤去。
  });

});

