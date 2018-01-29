(function() {
  FastClick.attach(document.body);
  var nowIdx = -1;
  var canClick = [0, 0, 0, 0, 0, 0];
  setTimeout(function() {
    $(".keep .loading").addClass("hide");
  }, 2000);
  $(".keep")
    .off("click", ".musicon")
    .on("click", ".musicon", function() {
      $("#sound0")[0].volume = 0;
      $("#sound0")[0].pause();
      $(".keep .musicon").addClass("hide");
      $(".keep .musicoff").removeClass("hide");
    });
  $(".keep")
    .off("click", ".skip")
    .on("click", ".skip", function() {
      $(".keep .page-bg .hand").addClass("hide");
      $(".keep .swipe").addClass("hide");
      removeHand();
      nowIdx = 5;
      ansClick();
    });
  $(".keep")
    .off("click", ".musicoff")
    .on("click", ".musicoff", function() {
      $("#sound0")[0].volume = 0.1;
      $("#sound0")[0].play();
      $(".keep .musicoff").addClass("hide");
      $(".keep .musicon").removeClass("hide");
    });
  $(".keep")
    .off("click", ".page1-click")
    .on("click", ".page1-click", function() {
      $(".keep .page1").addClass("disappear");
      setTimeout(function() {
        $(".keep .page1").addClass("hide");
        $(".keep .page1").removeClass("disappear");
      }, 1000);
      $(".keep .key").text(decodeURIComponent("%EF%BF%A5wiyn0OFCZIT%EF%BF%A5"));
      $(".keep .luodi .copy").attr("data-clipboard-text", decodeURIComponent("%EF%BF%A5wiyn0OFCZIT%EF%BF%A5"));
    });
  $(".keep .page-bg")
    .off("click", ".light1")
    .on("click", ".light1", function() {
      $(".keep .page1").addClass("hide");
      $(".keep .banzhuan").removeClass("hide");
      $(".keep .page-bg .hand").addClass("hide");
      $(".keep .swipe").addClass("hide");
      removeHand();
      $(".keep .page-bg .hand").addClass("b");
      setTimeout(function() {
        nowIdx = 0;
        canClick[1] = 1;
        $(".keep .banzhuan").addClass("appear");
      }, 100);
      setTimeout(function() {
        $(".keep .layer").removeClass("hide");
      }, 8000);
    });
  $(".keep .page-bg")
    .off("click", ".light2")
    .on("click", ".light2", function() {
      if (canClick[1]) {
        $(".keep .guanggao").removeClass("hide");
        $(".keep .page-bg .hand").addClass("hide");
        $(".keep .swipe").addClass("hide");
        removeHand();
        $(".keep .page-bg .hand").addClass("c");
        setTimeout(function() {
          nowIdx = 1;
          canClick[2] = 1;
          $(".keep .guanggao").addClass("appear");
        }, 100);
        setTimeout(function() {
          $(".keep .layer").removeClass("hide");
        }, 8000);
      }
    });
  $(".keep .page-bg")
    .off("click", ".light3")
    .on("click", ".light3", function() {
      if (canClick[2]) {
        $(".keep .chanpin").removeClass("hide");
        $(".keep .page-bg .hand").addClass("hide");
        $(".keep .swipe").addClass("hide");
        removeHand();
        $(".keep .page-bg .hand").addClass("d");
        setTimeout(function() {
          nowIdx = 2;
          canClick[3] = 1;
          $(".keep .chanpin").addClass("appear");
        }, 100);
        setTimeout(function() {
          $(".keep .layer").removeClass("hide");
        }, 8000);
      }
    });
  $(".keep .page-bg")
    .off("click", ".light4")
    .on("click", ".light4", function() {
      if (canClick[3]) {
        $(".keep .sheji").removeClass("hide");
        $(".keep .page-bg .hand").addClass("hide");
        $(".keep .swipe").addClass("hide");
        removeHand();
        $(".keep .page-bg .hand").addClass("e");
        setTimeout(function() {
          nowIdx = 3;
          canClick[4] = 1;
          $(".keep .sheji").addClass("appear");
        }, 100);
        setTimeout(function() {
          $(".keep .layer").removeClass("hide");
        }, 8000);
      }
    });
  $(".keep .page-bg")
    .off("click", ".light5")
    .on("click", ".light5", function() {
      if (canClick[4]) {
        $(".keep .jiaban").removeClass("hide");
        $(".keep .page-bg .hand").addClass("hide");
        $(".keep .swipe").addClass("hide");
        removeHand();
        $(".keep .page-bg .hand").addClass("f");
        setTimeout(function() {
          nowIdx = 4;
          canClick[5] = 1;
          $(".keep .jiaban").addClass("appear");
        }, 100);
        setTimeout(function() {
          $(".keep .layer").removeClass("hide");
        }, 8000);
      }
    });
  $(".keep .page-bg")
    .off("click", ".light6")
    .on("click", ".light6", function() {
      if (canClick[5]) {
        $(".keep .danshen").removeClass("hide");
        $(".keep .page-bg .hand").addClass("hide");
        $(".keep .swipe").addClass("hide");
        removeHand();
        setTimeout(function() {
          nowIdx = 5;
          $(".keep .danshen").addClass("appear");
        }, 100);
        setTimeout(function() {
          $(".keep .layer").removeClass("hide");
        }, 8000);
      }
    });

  $(".keep")
    .off("click", ".ans1")
    .on("click", ".ans1", function() {
      ansClick();
    });
  $(".keep")
    .off("click", ".ans2")
    .on("click", ".ans2", function() {
      ansClick();
    });
  $(".keep .luodi")
    .off("click", ".fanhui")
    .on("click", ".fanhui", function() {
      nowIdx = -1;
      canClick = [0, 0, 0, 0, 0, 0];
      $(".keep .page-bg .hand").removeClass("hide");
      $(".keep .page1").removeClass("hide");
      $(".keep .page-bg").scrollTop(0);
      $(".keep .luodi").addClass("hide");
      $(".keep .last-page").addClass("hide");
    });
  $(".keep .luodi")
    .off("click", ".lingqu")
    .on("click", ".lingqu", function() {
      $(".keep .last-page").removeClass("hide");
    });
  $(".keep .luodi")
    .off("click", ".copy")
    .on("click", ".copy", function() {
      var clipboard = new Clipboard(".keep .luodi .copy");
      clipboard.on("success", function(e) {
        _hmt.push(["_trackEvent", "button", "copy", "success"]);
        toast("复制成功");
      });

      clipboard.on("error", function(e) {
        _hmt.push(["_trackEvent", "button", "copy", "fail"]);
        toast("长按框内文字复制");
      });
    });
  $(".keep .luodi")
    .off("click", ".share")
    .on("click", ".share", function() {
      $(".keep #share").removeClass("hide");
    });
  $(".keep")
    .off("click", "#share")
    .on("click", "#share", function() {
      $(".keep #share").addClass("hide");
    });
  $(".keep .page-bg").on("scroll", function() {
    var innerHeight = $(".keep .page-bg")[0].scrollHeight;
    var screenHeight = $(window).height() * 2;
    var scrollTop = $(".keep .page-bg").scrollTop();
    if (innerHeight - scrollTop < screenHeight || nowIdx < 0) {
      $(".keep .swipe").addClass("hide");
    } else {
      $(".keep .swipe").removeClass("hide");
    }
  });
  function ansClick() {
    if (nowIdx != 5) {
      $(".keep .swipe").removeClass("hide");
    } else {
      $(".keep .luodi").removeClass("hide");
    }
    $(".keep .layer").addClass("hide");
    $(".keep .sheji").addClass("hide");
    $(".keep .guanggao").addClass("hide");
    $(".keep .chanpin").addClass("hide");
    $(".keep .banzhuan").addClass("hide");
    $(".keep .jiaban").addClass("hide");
    $(".keep .danshen").addClass("hide");
    $(".keep .page-bg .hand").removeClass("hide");
  }
  function removeHand() {
    $(".keep .hand").removeClass("b");
    $(".keep .hand").removeClass("c");
    $(".keep .hand").removeClass("d");
    $(".keep .hand").removeClass("e");
    $(".keep .hand").removeClass("f");
  }
  function toast(text) {
    if ($(".keep .toast").hasClass("hide")) {
      $(".keep .toast").text(text);
      $(".keep .toast").removeClass("hide");
      setTimeout(function() {
        $(".keep .toast").addClass("hide");
      }, 2000);
    }
  }
  var supportOrientation = typeof window.orientation === "number" && typeof window.onorientationchange === "object";
  var init = function() {
    var orientation;
    var updateOrientation = function() {
      if (supportOrientation) {
        orientation = window.orientation;
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
        $(".keep .bgTip").removeClass("hide");
      } else {
        $(".keep .bgTip").addClass("hide");
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
