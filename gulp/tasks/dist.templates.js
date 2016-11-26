'use strict';

module.exports = function() {
  $.gulp.task('dist:templates', function() {
    return $.gulp.src('build/*.html')
      .pipe($.gulp.dest($.config.dist));
  });
};