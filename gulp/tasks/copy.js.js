'use strict';

module.exports = function() {

  $.gulp.task('copy:js', function() {
    return $.gulp.src('src/js/prog.js')
      .pipe($.gulp.dest($.config.root + '/assets/js'))
  })

};
