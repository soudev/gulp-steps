
var gulp        = require('gulp'),
    $           = require('../helpers/$');

//---

$.streams.lintspaces = $.lazypipe()
  .pipe( $.cached, 'lintspaces' )
  .pipe( $.lintspaces, { editorconfig: $.config.paths.editorconfig } )
  .pipe( $.lintspaces.reporter );


gulp.task('lintspaces:tools', function() {
  return gulp.src( $.config.tools )
    .pipe( $.streams.lintspaces() );
});

gulp.task('lintspaces:project:js', function() {
  return gulp.src( $.config.project.js )
    .pipe( $.streams.lintspaces() );
});

gulp.task('lintspaces:project:styles', function() {
  return gulp.src( $.config.project.styles )
    .pipe( $.streams.lintspaces() );
});

gulp.task('lintspaces:project:html', function() {
  return gulp.src( $.config.project.html )
    .pipe( $.streams.lintspaces() );
});

gulp.task('lintspaces:project', [
  'lintspaces:project:js',
  'lintspaces:project:styles',
  'lintspaces:project:html'
]);

gulp.task('lintspaces', ['lintspaces:tools', 'lintspaces:project']);
