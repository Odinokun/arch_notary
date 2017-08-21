module.exports = function() {

  // begin custom ul click
  $('.custom-ul__li').on('click', function() {
    $(this).toggleClass('active');
  });
  // end   custom ul click

};