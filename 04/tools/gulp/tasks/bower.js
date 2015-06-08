
var gulp        = require('gulp'),
    $           = require('../helpers/$');

//---

gulp.task('bower:jquery', function() {
  return gulp.src( $.config.paths.bower.downloaded + '/jquery/dist/*.{js,map}' )
    .pipe( gulp.dest( $.config.paths.bower.toUse + '/vendor/jquery' ) );
});

gulp.task('bower:dev', $.sequence( 'clean:bower', 'bower:jquery' ));

gulp.task('bower:dist', ['bower:dev'], function() {
  return gulp.src( $.config.paths.bower.toUse + '/**/*' )
    .pipe( gulp.dest( $.config.paths.dist ) );
});
