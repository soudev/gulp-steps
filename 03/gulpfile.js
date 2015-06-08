
var gulp      = require('gulp');

//==============================================================================
// @begin: gulp tasks ==========================================================
//==============================================================================
// @begin: clean

gulp.task('clean:dist', $.del.bind(null, [ $.config.paths.dist ]));

gulp.task('clean:bower', $.del.bind(null, [ $.config.paths.bower.toUse ]));

gulp.task('clean', ['clean:dist', 'clean:bower']);

// @end: clean
//------------------------------------------------------------------------------
// @begin: bower

gulp.task('bower:jquery', function() {
  return gulp.src( $.config.paths.bower.downloaded + '/jquery/dist/*.{js,map}' )
    .pipe( gulp.dest( $.config.paths.bower.toUse + '/vendor/jquery' ) );
});

gulp.task('bower:dev', $.sequence( 'clean:bower', 'bower:jquery' ));

gulp.task('bower:dist', ['bower:dev'], function() {
  return gulp.src( $.config.paths.bower.toUse + '/**/*' )
    .pipe( gulp.dest( $.config.paths.dist ) );
});

// @end: bower
//------------------------------------------------------------------------------
// @begin: jshint

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

// @end: jshint
//------------------------------------------------------------------------------
// @begin: lintspaces

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

// @end: lintspaces
//------------------------------------------------------------------------------

gulp.task('validate', ['jshint', 'lintspaces']);

//------------------------------------------------------------------------------
// @begin: build

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

gulp.task('build', $.sequence(['clean:dist', 'validate'], ['build:index', 'bower:dist']));

// @end: build
//------------------------------------------------------------------------------
// @begin: webserver

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

// @end: webserver
//------------------------------------------------------------------------------
// @begin: watch

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

// @end: watch
//------------------------------------------------------------------------------
// @begin: main / default

gulp.task('default', ['watch'], function() {
  $.projectInfoMsg();
});

gulp.task('release', ['build'], function() {
  $.projectInfoMsg();
});

gulp.task('preview', ['webserver:dist'], function() {
  $.projectInfoMsg();
});

// @end: main / default
//==============================================================================
// @end: gulp tasks ============================================================
//==============================================================================
