module.exports = function() {

  // begin preloader

  $(window).on('load', function () {
    var $preloader = $('#preloader');
    $preloader.delay(500).fadeOut('slow');
  });

  // end   preloader

};
