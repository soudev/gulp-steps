module.exports = function(gulp, $) {

  $.streams.jshint = $.lazypipe()
    .pipe( $.cached, 'jshint' )
    .pipe( $.jshint )
    .pipe( $.jshint.reporter, 'jshint-stylish' )
    .pipe( $.jshint.reporter, 'fail' );


  gulp.task('jshint:tools', function() {
    return gulp.src( $.config.tools )
      .pipe( $.streams.jshint() );
  });

  gulp.task('jshint:project', function() {
    return gulp.src( $.config.project.js )
      .pipe( $.streams.jshint() );
  });

  gulp.task('jshint', ['jshint:tools', 'jshint:project']);

};
