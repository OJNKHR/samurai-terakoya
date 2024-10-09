$(function(){

//カルーセル設定
$('#main-visual').slick({
  autoplay: true,
  dots:true,
  infinite: true,
  autoplaySpeed:2500,
  arrows: false,
  fade:true,
  cssEase:'linear',
});

//スクロールした時にAbout要素のフェードイン設定
$(window).scroll(function(){
  $('#about').fadeIn("slow");
});

//スクロールした時にWorks要素のフェードイン
$(window).scroll(function(){
  $('#works').fadeIn("slow");
});

//works-pngのhover設定
$('.works-png > img').mouseover(function(){
  $(this).animate({
    opacity:0.5,
  },500);
});

$('.works-png > img').mouseout(function(){
  $(this).animate({
    opacity:1
  },500);
});

//works要素の画像をクリックした時にモーダルが表示される設定
$('.works-png > img').on('click',function(){
  let imgSrc = $(this).attr('src');//クリックされた画像のソースを取得
  $('#modal-image').attr('src',imgSrc);//モーダル内の画像を設定
  $('#image-modal').fadeIn();//モーダルを表示
});

//モーダルの閉じるボタンがクリックされた時の処理
$('#close-btn').on('click',function(){
  $('#image-modal').fadeOut();
});

//モーダルの外側をクリックした時の処理

//スクロールを滑らかにする


});