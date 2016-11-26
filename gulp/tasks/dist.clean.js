'use strict';

module.exports = function() {
  $.gulp.task('dist:clean', function(cb) {
    return $.del($.config.dist, cb);
  });
};

