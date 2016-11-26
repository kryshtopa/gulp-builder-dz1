'use strict';

module.exports = function() {
  $.gulp.task('dist:images', function() {
    return $.gulp.src('build/assets/img/**/*.*')
      .pipe($.gulp.dest($.config.dist + '/assets/img'));
  });
};
