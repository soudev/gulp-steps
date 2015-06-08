
var gulp        = require('gulp'),
    $           = require('../$');

//---

gulp.task('webserver:dist', ['build'], function() {

  $.browserSync({
    ui: false,
    port: $.config.webserver.port,
    server:{
      baseDir: $.config.paths.dist
    }
  });

});

gulp.task('webserver:dev', ['validate', 'bower:dev'], function() {

  $.browserSync({
    port: $.config.webserver.port,
    server:{
      baseDir: [
        $.config.paths.src,
        $.config.paths.bower.toUse
      ]
    }
  });

});
