// Expose all Gulp plugins found
var $ = module.exports = require('gulp-load-plugins')();

//---
// Expose some other modules

$.del         = require('del');
$.lazypipe    = require('lazypipe');
$.browserSync = require('browser-sync');
$.reload      = $.browserSync.reload;

  //--- local modules

$.pkg         = require('../package.json');

$.config      = require('./config');

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
