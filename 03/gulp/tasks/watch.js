
var gulp        = require('gulp'),
    $           = require('../$');

//---

gulp.task('watch', ['webserver:dev'], function() {

  gulp.watch( $.config.project.html, ['wf:project:html']);

  gulp.watch( $.config.project.js, ['wf:project:js']);

  gulp.watch( $.config.project.styles, ['wf:project:styles']);

});

gulp.task('wf:bs:reload', function() {
  $.reload();
});

gulp.task('wf:bs:reload:stream', function() {
  return gulp.src( $.config.project.styles )
    .pipe( $.cached( 'styles' ) )
    .pipe( $.reload({ stream: true }) );
});


gulp.task('wf:project:html', function( done ) {
  $.sequence(
    'lintspaces:project:html',
    'wf:bs:reload',
    done
  );
});

gulp.task('wf:project:js', function( done ) {
  $.sequence(
    [
      'jshint:project',
      'lintspaces:project:js'
    ],
    'wf:bs:reload',
    done
  );
});

gulp.task('wf:project:styles', function( done ) {
  $.sequence(
    'lintspaces:project:styles',
    'wf:bs:reload:stream',
    done
  );
});
