// Скрипт для видео

$(function () {
  var $videoContainer = $('#video'),                   // Id цепляется на обвертку, где тег видео и ваша кнопка плей
    $videoControls = $('.decor__video-control'),       // Класс цепляется на блок с картинкой кнопки запуска
    $video = $('#myVideo')[0];                         // Id цепляется на тег видео

  $videoControls.click(function () {
    if ($video.paused) {
      $video.play();
      $videoContainer.addClass('video-is-playing');
    } else {
      $video.pause();
      $videoContainer.removeClass('video-is-playing');
      //  возвращаем постер
      $video.load();
    }
  });
});