$(function() {

  // begin preloader
  require('./modules/preloader')();
  // end   preloader
  
  // begin require SVG for IE
  require('./modules/svg4everybody')();
  // end   require SVG for IE

  // begin Chrome Smooth Scroll
  require('./modules/smoothScroll')();
  // end   Chrome Smooth Scroll

  // begin Chrome Scroll2Ancor
  // require('./modules/scroll2ancor')();
  // end   Chrome Scroll2Ancor
  
  // begin Slick slider
  // require('./modules/slick')();
  // end   Slick slider

  // begin Popup
  // require('./modules/popup')();
  // end   Popup

  // begin Sticky header
  require('./modules/stickyHeader')();
  // end   Sticky header

  // begin Animate.css
  // require('./modules/waypoints')();
  // require('./modules/animateCss')();
  // end   Animate.css

  // begin Fancybox3
  // require('./modules/fancybox')();
  // end   Fancybox3

  // begin mobile menu
  require('./modules/mobileMenu')();
  // end   mobile menu

  // begin всплывающий подвал
  require('./modules/bubbleFooter')();
  // end   всплывающий подвал

  // begin активация кастомизированного пункта списка при клике
  require('./modules/customUl')();
  // end   активация кастомизированного пункта списка при клике

  // begin маска телефона в inputs
  require('./modules/maskedinput')();
  // end   маска телефона в inputs

  // begin стилизация карты в контактах
  // require('./modules/map')();
  // end   стилизация карты в контактах
});