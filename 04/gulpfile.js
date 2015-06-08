
var gulp        = require('gulp'),
    $           = require('./tools/gulp/$'),
    requireDir  = require( 'require-dir' );

// Require all gulp tasks
requireDir( './tools/gulp/tasks');

/*
  main tasks and default gulp task moved to gulp/tasks/default.js
*/
