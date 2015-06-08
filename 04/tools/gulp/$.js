// Expose all Gulp plugins found
var $ = module.exports = require('gulp-load-plugins')();

//---

$.path            = require('path');

// path is relative to gulpfile.js location
$.rootPath = $.path.resolve( './' );

// [Gist] Better local require() paths for Node.js
// https://gist.github.com/branneman/8048520
$.rootRequire = function( name ) {
  return require( $.path.join( $.rootPath, name ) );
};

//---
// Expose some other modules

$.del         = require('del');
$.lazypipe    = require('lazypipe');
$.browserSync = require('browser-sync');
$.reload      = $.browserSync.reload;

  //--- local modules

$.pkg         = $.rootRequire('package.json');

$.config      = $.rootRequire('tools/config');

//---

// shared streams
$.streams     = {};

//---

/**
  * Log a message or series of messages using chalk's blue color.
  * Can pass in a string, object or array.
  */
$.log = function(msg) {
  if (typeof(msg) === 'object') {
    for (var item in msg) {
      if (msg.hasOwnProperty(item)) {
        $.util.log($.util.colors.blue(msg[item]));
      }
    }
  } else {
    $.util.log($.util.colors.blue(msg));
  }
};

//---

$.projectInfoMsg = function() {
  $.log('');
  $.log('project: ' + $.pkg.name + ' v' + $.pkg.version);
  $.log('description: ' + $.pkg.description);
  $.log('');
};
