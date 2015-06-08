module.exports = (function() {

  var config = {};

  //---

  // all paths is based on gulpfile.js location
  config.paths = {
    editorconfig : '../.editorconfig',
    src          : 'src',
    dist         : 'dist',
    bower        : {
      downloaded : 'bower_components',
      toUse      : '.local/bower'
    }
  };

  config.tools = 'gulpfile.js';

  config.project = {
    index   : config.paths.src + '/index.html',
    html    : [ config.paths.src + '/**/*.html' ],
    styles  : [ config.paths.src + '/**/*.css' ],
    js      : [ config.paths.src + '/**/*.js' ]
  };

  config.webserver = {
    port: 1337
  };

  //---

  return config;

})();
