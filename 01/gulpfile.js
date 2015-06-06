
var gulp        = require('gulp'),
    sequence    = require('gulp-sequence'), // TODO: check if is needed
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

// clean
gulp.task('clean', del.bind(null, [ 'dist' ]));

// jshint
gulp.task('jshint:tools', function() { console.log('TODO: define'); });
gulp.task('jshint:project', function() { console.log('TODO: define'); });
gulp.task('jshint', ['jshint:tools', 'jshint:project']);

// lintspaces
gulp.task('lintspaces:tools', function() { console.log('TODO: define'); });
gulp.task('lintspaces:project:js', function() { console.log('TODO: define'); });
gulp.task('lintspaces:project:css', function() { console.log('TODO: define'); });
gulp.task('lintspaces:project:html', function() { console.log('TODO: define'); });
gulp.task('lintspaces:project', ['lintspaces:project:js', 'lintspaces:project:css', 'lintspaces:project:html']);
gulp.task('lintspaces', ['lintspaces:tools', 'lintspaces:project']);

// validate
gulp.task('validate', ['jshint', 'lintspaces']);

// build
gulp.task('build', ['validate'], function() { console.log('TODO: define'); });

// webserver
gulp.task('webserver:dist', ['build'], function() { console.log('TODO: define'); });

gulp.task('webserver:dev', ['validate'], function() { console.log('TODO: define'); });

// watch
gulp.task('watch', ['webserver:dev'], function() { console.log('TODO: define'); });

//------------------------------------------------------------------------------
// main

gulp.task('default', ['watch'], function() {
  projectInfoMsg()
});

gulp.task('preview', ['webserver:dist'], function() {
  projectInfoMsg()
});

//==============================================================================
// @end: gulp tasks ============================================================
//==============================================================================
