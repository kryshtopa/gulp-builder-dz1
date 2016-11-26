'use strict';

module.exports = function() {
  $.gulp.task('sftp', function () {

    return $.gulp.src('src/*')
      .pipe($.gp.sftp({
          host: 'website.com',
          auth: 'keyMain',
          remotePath: '/'
      }));

  });
};