
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

gulp.task('lintspaces:project:css', function() {
  return gulp.src('src/**/*.css')
    .pipe( lintspaces({ editorconfig: '../.editorconfig' }) )
    .pipe( lintspaces.reporter() );
});

gulp.task('lintspaces:project:html', function() { console.log('TODO: define'); });

gulp.task('lintspaces:project', [
  'lintspaces:project:js',
  'lintspaces:project:css',
  'lintspaces:project:html'
]);

gulp.task('lintspaces', ['lintspaces:tools', 'lintspaces:project']);

// @end: lintspaces
//------------------------------------------------------------------------------
// validate
gulp.task('validate', ['jshint', 'lintspaces']);

//------------------------------------------------------------------------------
// @begin: build

gulp.task('build:index', function() {

  var jsFilter       = filter( '**/*.js' ),
      cssFilter      = filter( '**/*.css' ),
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
    .pipe( cssFilter )
    .pipe( csso() ) // Minify any CSS sources
    .pipe( cssFilter.restore() )
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

gulp.task('watch', ['webserver:dev'], function() { console.log('TODO: define'); });

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
