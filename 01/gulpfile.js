
var gulp        = require('gulp'),
    sequence    = require('gulp-sequence'),
    jshint      = require('gulp-jshint'), // jshint-stylish
    lintspaces  = require('gulp-lintspaces'),
    concat      = require('gulp-concat'),
    rename      = require('gulp-rename'),
    uglify      = require('gulp-uglify'),
    del         = require('del'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload;

//==============================================================================
// @begin: gulp tasks ==========================================================
//==============================================================================

// clean

// jshint

// lintspaces

// build:js

// minifyhtml

// webserver

// watch

// main

gulp.task('default', function() {
  console.log('TODO: define');
});

gulp.task('build', function() {
  console.log('TODO: define');
});

gulp.task('preview', ['build'], function() {
  console.log('TODO: define');
});

//==============================================================================
// @end: gulp tasks ============================================================
//==============================================================================
