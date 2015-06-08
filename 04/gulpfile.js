
var gulp        = require('gulp'),
    $           = require('./gulp/$'),
    requireDir  = require( 'require-dir' );

// Require all gulp tasks
requireDir( './gulp/tasks');

/*
  main tasks and default gulp task moved to gulp/tasks/default.js
*/
