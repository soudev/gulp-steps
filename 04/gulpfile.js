
/*
  - load gulp tasks files
    - main tasks and default gulp task defined on gulp/tasks/default.js
*/
/*
require('./tools/gulp')
  .loadTasks('tools/gulp/tasks');
*/

var requireDir  = require( 'require-dir' );

// Require all gulp tasks
requireDir( './tools/gulp/tasks');
