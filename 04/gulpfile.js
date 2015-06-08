
var gulp        = require('gulp'),
    $           = require('./gulp/$'),
    requireDir  = require( 'require-dir' );

// Require all gulp tasks
requireDir( './gulp/tasks');

//==============================================================================
// @begin: gulp tasks ==========================================================
//==============================================================================
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
