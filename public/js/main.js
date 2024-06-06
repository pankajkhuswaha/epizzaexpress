(function ($) {
  "use strict";

  // One Page Nav
  var top_offset = $(".header-area").height() - 100;
  $(".main-menu nav ul").onePageNav({
    currentClass: "active",
    scrollOffset: top_offset,
  });

  // sticky
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 200) {
      $("#header-sticky").removeClass("sticky-menu");
    } else {
      $("#header-sticky").addClass("sticky-menu");
    }
  });

  $(function () {
    $("a.smoth-scroll").on("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - 100,
          },
          1000
        );
      event.preventDefault();
    });
  });
})(jQuery);
