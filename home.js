(function() {
  FastClick.attach(document.body);

  setTimeout(function() {
    $(".home .in").removeClass("hide");
  }, 2000);
  $(".home")
    .off("click", ".in")
    .on("click", ".in", function() {
      $(".home .loading").addClass("hide");
      $("#video")[0].play();
      $("#video").on("ended", function() {
        $(".home .land").removeClass("hide");
      });
    });

  $(".home")
    .off("click", ".land")
    .on("click", ".land", function() {
      $(".home .video").addClass("hide");
      $("#video").remove();
      $(".home .last-page").removeClass("hide");
    });
  $(".home")
    .off("click", ".again")
    .on("click", ".again", function() {
      location.href =
        "https://mp.weixin.qq.com/mp/video?t=pages/video_detail_new&scene=1&vid=h1330bg3hjy&__biz=MzAxMjg2MDE2NQ==&mid=504637550&idx=1&sn=91bbfa00ef8e0c4240ae55ba00b8ec4e&vidsn=3cc8f6d1fbcd740622a27f65664df38c&from=groupmessage&isappinstalled=0#wechat_redirect";
      // $(".home .last-page").addClass("hide");
      // $(".home .video").append(
      //   '<video id="video" preload="load" width="100%" height="auto" playsinline="true" webkit-playsinline="true" x-webkit-airplay="allow" airplay="allow" x5-video-player-type="h5" x5-video-player-fullscreen="true" x5-video-orientation="portrait" src="img/video.mp4"></video>'
      // );
      // $("#video")[0].play();
      // $(".home .video").removeClass("hide");
      // $(".home .land").addClass("hide");
      // $("#video").on("ended", function() {
      //   $(".home .land").removeClass("hide");
      // });
    });
  $(".home")
    .off("click", ".share")
    .on("click", ".share", function() {
      $(".home .layer").removeClass("hide");
    });

  $(".home")
    .off("click", ".layer")
    .on("click", ".layer", function() {
      $(".home .layer").addClass("hide");
    });
})();
