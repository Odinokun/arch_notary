module.exports = function() {

  // begin Chrome Smooth Scroll
  $(function() {
    try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
      } catch(err) {
    };
  });
  // end   Chrome Smooth Scroll

};