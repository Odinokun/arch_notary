!function o(e,r,t){function n(i,l){if(!r[i]){if(!e[i]){var c="function"==typeof require&&require;if(!l&&c)return c(i,!0);if(s)return s(i,!0);var u=new Error("Cannot find module '"+i+"'");throw u.code="MODULE_NOT_FOUND",u}var d=r[i]={exports:{}};e[i][0].call(d.exports,function(o){var r=e[i][1][o];return n(r||o)},d,d.exports,o,e,r,t)}return r[i].exports}for(var s="function"==typeof require&&require,i=0;i<t.length;i++)n(t[i]);return n}({1:[function(o,e,r){$(function(){o("./modules/svg4everybody")(),o("./modules/smoothScroll")(),o("./modules/stickyHeader")(),o("./modules/mobileMenu")(),o("./modules/bubbleFooter")()})},{"./modules/bubbleFooter":2,"./modules/mobileMenu":3,"./modules/smoothScroll":4,"./modules/stickyHeader":5,"./modules/svg4everybody":6}],2:[function(o,e,r){e.exports=function(){$(window).on("load",function(){$(".footer").addClass("active")})}},{}],3:[function(o,e,r){e.exports=function(){$("#burger").on("click",function(){$("#burger input").is(":checked")?($(".sticky-header").addClass("active"),$("body").addClass("no-scroll")):($(".sticky-header").removeClass("active"),$("body").removeClass("no-scroll"))})}},{}],4:[function(o,e,r){e.exports=function(){$(function(){try{$.browserSelector(),$("html").hasClass("chrome")&&$.smoothScroll()}catch(o){}})}},{}],5:[function(o,e,r){e.exports=function(){var o=0;$(window).scroll(function(e){var r=$(".sticky-header"),t=$(this).scrollTop();t<=0?r.removeClass("hide").removeClass("scrolling"):t<o?r.removeClass("hide"):t>o&&(r.addClass("scrolling"),t+$(window).height()>=$(document).height()-r.height()?r.removeClass("hide"):Math.abs(r.position().top)<r.height()&&r.addClass("hide")),o=t})}},{}],6:[function(o,e,r){e.exports=function(){$(function(){svg4everybody()})}},{}]},{},[1]);