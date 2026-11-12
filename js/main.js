
// ロゴをクリックでハロウィーン調に切り替え（もう一度クリックで元に戻る）
$('.logo').on('click', function () {
  var isHalloween = $('body').toggleClass('halloween').hasClass('halloween');

  $('img').each(function () {
    var $img = $(this);
    if (isHalloween) {
      $img.data('original-src', $img.attr('src'));
      // 同名ファイル + _halloween の画像に切り替える（拡張子は .jpg）
      $img.attr('src', $img.attr('src').replace(/\.[a-z]+$/i, '_halloween.jpg'));
    } else {
      $img.attr('src', $img.data('original-src'));
    }
  });
});
