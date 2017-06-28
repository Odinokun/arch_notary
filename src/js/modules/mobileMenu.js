module.exports = function() {

  // begin mobile menu

  $('#burger').on('click', function() {
    if($("#burger input").is(':checked')) { 
      $('.sticky-header').addClass('active');
      $('body').addClass('no-scroll');
      // return false;
    } else {
      $('.sticky-header').removeClass('active');
      $('body').removeClass('no-scroll');
    }
  });
  
  // end   mobile menu

};