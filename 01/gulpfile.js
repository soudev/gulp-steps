
var gulp        = require('gulp'),
    sequence    = require('gulp-sequence'),
    jshint      = require('gulp-jshint'), // jshint-stylish
    lintspaces  = require('gulp-lintspaces'),
    rev         = require('gulp-rev'),
    revReplace  = require('gulp-rev-replace'),
    useref      = require('gulp-useref'),
    filter      = require('gulp-filter'),
    uglify      = require('gulp-uglify'),
    csso        = require('gulp-csso'),
    minifyHtml  = require('gulp-minify-html'),

    del         = require('del'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload,
    pkg         = require('./package.json');

//------------------------------------------------------------------------------
// utils

function projectInfoMsg() {
  console.log('');
  console.log('project: ' + pkg.name + ' v' + pkg.version);
  console.log('description: ' + pkg.description);
  console.log('');
}

//==============================================================================
// @begin: gulp tasks ==========================================================
//==============================================================================
// @begin: clean

gulp.task('clean:dist', del.bind(null, [ 'dist' ]));

gulp.task('clean:bower', del.bind(null, [ '.local/bower' ]));

gulp.task('clean', ['clean:dist', 'clean:bower']);

// @end: clean
//------------------------------------------------------------------------------
// @begin: bower

gulp.task('bower:jquery', function() {
  return gulp.src('bower_components/jquery/dist/*.{js,map}')
    .pipe(gulp.dest('.local/bower/vendor/jquery'));
});

gulp.task('bower:dev', sequence('clean:bower', 'bower:jquery'));

gulp.task('bower:dist', ['bower:dev'], function() {
  return gulp.src('.local/bower/**/*')
    .pipe(gulp.dest('dist'));
});

// @end: bower
//------------------------------------------------------------------------------
// @begin: jshint

gulp.task('jshint:tools', function() {
  return gulp.src('gulpfile.js')
    .pipe( jshint() )
    .pipe( jshint.reporter('jshint-stylish') )
    .pipe( jshint.reporter('fail') );
});

gulp.task('jshint:project', function() {
    return gulp.src('src/**/*.js')
    .pipe( jshint() )
    .pipe( jshint.reporter('jshint-stylish') )
    .pipe( jshint.reporter('fail') );
});

gulp.task('jshint', ['jshint:tools', 'jshint:project']);

// @end: jshint
//------------------------------------------------------------------------------
// @begin: lintspaces

gulp.task('lintspaces:tools', function() {
  return gulp.src('gulpfile.js')
    .pipe( lintspaces({ editorconfig: '../.editorconfig' }) )
    .pipe( lintspaces.reporter() );
});

gulp.task('lintspaces:project:js', function() {
  return gulp.src('src/**/*.js')
    .pipe( lintspaces({ editorconfig: '../.editorconfig' }) )
    .pipe( lintspaces.reporter() );
});

gulp.task('lintspaces:project:styles', function() {
  return gulp.src('src/**/*.css')
    .pipe( lintspaces({ editorconfig: '../.editorconfig' }) )
    .pipe( lintspaces.reporter() );
});

gulp.task('lintspaces:project:html', function() {
  return gulp.src('src/**/*.html')
    .pipe( lintspaces({ editorconfig: '../.editorconfig' }) )
    .pipe( lintspaces.reporter() );
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

  var jsFilter       = filter( '**/*.js' ),
      stylesFilter   = filter( '**/*.css' ),
      htmlFilter     = filter( '**/*.html' ),
      userefAssets   = useref.assets(),
      minifyHtmlOpts = {
        conditionals: true,
        spare:true
      };

  return gulp.src( 'src/index.html' )
    .pipe( userefAssets ) // Concatenate with gulp-useref
    .pipe( jsFilter )
    .pipe( uglify() ) // Minify any javascript sources
    .pipe( jsFilter.restore() )
    .pipe( stylesFilter )
    .pipe( csso() ) // Minify any CSS sources
    .pipe( stylesFilter.restore() )
    .pipe( rev() ) // Rename the concatenated files
    .pipe( userefAssets.restore() )
    .pipe( useref() )
    .pipe( revReplace() ) // Substitute in new filenames
    .pipe( htmlFilter )
    .pipe( minifyHtml( minifyHtmlOpts ) )
    .pipe( htmlFilter.restore() )
    .pipe( gulp.dest('dist') );

});

gulp.task('build', sequence(['clean:dist', 'validate'], ['build:index', 'bower:dist']));

// @end: build
//------------------------------------------------------------------------------
// @begin: webserver

gulp.task('webserver:dist', ['build'], function() {

  browserSync({
    ui: false,
    port: 1337,
    server:{
      baseDir: 'dist'
    }
  });

});

gulp.task('webserver:dev', ['validate', 'bower:dev'], function() {

  browserSync({
    port: 1337,
    server:{
      baseDir: ['src', '.local/bower']
    }
  });

});

// @end: webserver
//------------------------------------------------------------------------------
// @begin: watch

gulp.task('watch', ['webserver:dev'], function() {

  gulp.watch(['src/**/*.html'], ['wf:project:html']);

  gulp.watch(['src/**/*.js'], ['wf:project:js']);

  gulp.watch(['src/**/*.css'], ['wf:project:styles']);

});

gulp.task('wf:bs:reload', function() {
  reload();
});


gulp.task('wf:project:html', function( done ) {
  sequence(
    'lintspaces:project:html',
    'wf:bs:reload',
    done
  );
});

gulp.task('wf:project:js', function( done ) {
  sequence(
    [
      'jshint:project',
      'lintspaces:project:js'
    ],
    'wf:bs:reload',
    done
  );
});

gulp.task('wf:project:styles', function( done ) {
  sequence(
    'lintspaces:project:styles',
    'wf:bs:reload',
    done
  );
});

// @end: watch
//------------------------------------------------------------------------------
// @begin: main

gulp.task('default', ['watch'], function() {
  projectInfoMsg();
});

gulp.task('release', ['build'], function() {
  projectInfoMsg();
});

gulp.task('preview', ['webserver:dist'], function() {
  projectInfoMsg();
});

// @end: main
//==============================================================================
// @end: gulp tasks ============================================================
//==============================================================================
