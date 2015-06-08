
var gulp        = require('gulp'),
    $           = require('../$');

//---

gulp.task('default', ['watch'], function() {
  $.projectInfoMsg();
});

gulp.task('release', ['build'], function() {
  $.projectInfoMsg();
});

gulp.task('preview', ['webserver:dist'], function() {
  $.projectInfoMsg();
});
