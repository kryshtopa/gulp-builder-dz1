'use strict';

module.exports = function() {
  $.gulp.task('dist:fonts', function() {
    return $.gulp.src('build/assets/fonts/**/*.*')
      .pipe($.gulp.dest($.config.dist + '/assets/fonts'));
  });
};