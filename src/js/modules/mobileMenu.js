module.exports = function() {

  // begin mobile menu
  $('#burger').on('click', function() {
    // $('.sticky-header').toggleClass('active');
      // return false;


    // if ('#burger input:checked') {
    //   $('.sticky-header').addClass('active');
    // } else {
    //   $('.sticky-header').removeClass('active');
    // }

    // if($("#burger input").prop("checked") == 'checked') { 
    //   $('.sticky-header').addClass('active');
    //   // return false;
    // } else {
    //   $('.sticky-header').removeClass('active');
    // }

    if($("#burger input").is(':checked')) { 
      $('.sticky-header').addClass('active');
      $('body').addClass('no-scroll');
      // return false;
    } else {
      $('.sticky-header').removeClass('active');
      $('body').removeClass('no-scroll');
    }

    
  });

  
  // $(function() {

  // });

  // $(function(){     
  //     else {
  //           $('.sticky-header').removeClass('active');
  //         }
  //     return true;
  // }
  // end   mobile menu

};