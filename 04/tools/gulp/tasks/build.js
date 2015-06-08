module.exports = function(gulp, $) {

  gulp.task('build:index', function() {

    var jsFilter       = $.filter( '**/*.js' ),
        stylesFilter   = $.filter( '**/*.css' ),
        htmlFilter     = $.filter( '**/*.html' ),
        userefAssets   = $.useref.assets(),
        minifyHtmlOpts = {
          conditionals: true,
          spare:true
        };

    return gulp.src( $.config.project.index )
      .pipe( userefAssets ) // Concatenate with gulp-useref
      .pipe( jsFilter )
      .pipe( $.uglify() ) // Minify any javascript sources
      .pipe( jsFilter.restore() )
      .pipe( stylesFilter )
      .pipe( $.csso() ) // Minify any CSS sources
      .pipe( stylesFilter.restore() )
      .pipe( $.rev() ) // Rename the concatenated files
      .pipe( userefAssets.restore() )
      .pipe( $.useref() )
      .pipe( $.revReplace() ) // Substitute in new filenames
      .pipe( htmlFilter )
      .pipe( $.minifyHtml( minifyHtmlOpts ) )
      .pipe( htmlFilter.restore() )
      .pipe( gulp.dest( $.config.paths.dist ) );

  });

  gulp.task('build', $.sequence(
    ['clean:dist', 'validate'],
    ['build:index', 'bower:dist']
  ));

};
