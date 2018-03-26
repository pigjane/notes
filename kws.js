(function () {
  FastClick.attach(document.body);
  // document.addEventListener(
  //   "WeixinJSBridgeReady",
  //   function() {
  //     $("#video")[0].load();
  //     // setTimeout(function() {
  //     //   $(".kws .loading").addClass("hide");
  //     //   $("#video")[0].play();
  //     // }, 4000);
  //     loadingFuc();
  //   },
  //   false
  // );
  $("#video")[0].load();
  var num = 0;
  var loadingFuc = function () {
    if (num < 100) {
      setTimeout(function () {
        num++;
        $(".kws .loading .load-txt").text(num + "%");
        $(".kws .loading .progress").css({
          'marginLeft': num + '%'
        })
        loadingFuc();
      }, 30);
    } else {
      setTimeout(function () {
        // $(".kws .loading").addClass("hide");
        $(".kws .loading .load-btn>p").removeClass("hide");
        // $("#video")[0].play();
      }, 1000);
    }
  };
  $(".kws")
    .off("click", ".loading")
    .on("click", ".loading", function () {
      if (num >= 100) {
        $(".kws .loading").addClass("hide");
        $("#video")[0].play();
      }
    });
  loadingFuc();
  $("#video").on("ended", function () {
    $(".kws .skip").addClass('hide');
    $(".kws .jump").removeClass("hide");
  });
  $(".kws")
    .off("click", ".jump")
    .on("click", ".jump", function () {
      location.href = "http://mall.ecovacs.cn";
    });
  $(".kws")
    .off("click", ".skip")
    .on("click", ".skip", function () {
      $(".kws .skip").addClass('hide');
      $(".kws .jump").removeClass("hide");
      $("#video")[0].pause();
    });
  var supportOrientation = typeof window.orientation === "number" && typeof window.onorientationchange === "object";
  var init = function () {
    var orientation;
    var updateOrientation = function () {
      if (supportOrientation) {
        orientation = window.orientation;
        console.log(orientation);
        switch (orientation) {
          case 90:
          case -90:
            orientation = true;
            break;
          default:
            orientation = false;
            break;
        }
      } else {
        orientation = window.innerWidth > window.innerHeight ? true : false;
      }
      if (orientation) {
        $(".kws .bgTip").removeClass("hide");
      } else {
        $(".kws .bgTip").addClass("hide");
      }
    };
    if (supportOrientation) {
      window.addEventListener("orientationchange", updateOrientation, false);
    } else {
      //监听resize事件
      window.addEventListener("resize", updateOrientation, false);
    }
    updateOrientation();
  };
  window.addEventListener("DOMContentLoaded", init, false);
})();
