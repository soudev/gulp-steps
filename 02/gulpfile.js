
var gulp        = require('gulp'),
    $           = require('gulp-load-plugins')(),

    // TODO: remove
    sequence    = require('gulp-sequence'),
    jshint      = require('gulp-jshint'), // jshint-stylish
    lintspaces  = require('gulp-lintspaces'),
    rev         = require('gulp-rev'),
    revReplace  = require('gulp-rev-replace'),
    useref      = require('gulp-useref'),
    filter      = require('gulp-filter'),
    uglify      = require('gulp-uglify'),
    csso        = require('gulp-csso'),
    minifyHtml  = require('gulp-minify-html');

    //---

    $.pkg         = require('./package.json');
    $.del         = require('del');
    $.lazypipe    = require('lazypipe');
    $.browserSync = require('browser-sync');
    $.reload      = $.browserSync.reload;

    // shared streams
    $.streams     = {};

//------------------------------------------------------------------------------
// @begin: utils
(function() {

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

})();
// @end: utils
//------------------------------------------------------------------------------
// @begin: configs
(function() {

  var paths = {
    editorconfig : '../.editorconfig',
    src          : 'src',
    dist         : 'dist',
    bower        : {
      downloaded : 'bower_components',
      toUse      : '.local/bower'
    }
  };

  $.config = {

    paths   : paths,

    tools   : 'gulpfile.js',

    project : {
      index   : paths.src + '/index.html',
      html    : [ paths.src + '/**/*.html' ],
      css     : [ paths.src + '/**/*.css' ],
      js      : [ paths.src + '/**/*.js' ]
    }

  };

})();
// @end: configs
//==============================================================================
// @begin: gulp tasks ==========================================================
//==============================================================================
// @begin: clean

gulp.task('clean:dist', $.del.bind(null, [ $.config.paths.dist ]));

gulp.task('clean:bower', $.del.bind(null, [ $.config.paths.bower.toUse ]));

gulp.task('clean', ['clean:dist', 'clean:bower']);

// @end: clean
//------------------------------------------------------------------------------
// @begin: bower

gulp.task('bower:jquery', function() {
  return gulp.src( $.config.paths.bower.downloaded + '/jquery/dist/*.{js,map}' )
    .pipe(gulp.dest( $.config.paths.bower.toUse + '/vendor/jquery' ));
});

gulp.task('bower:dev', $.sequence( 'clean:bower', 'bower:jquery' ));

gulp.task('bower:dist', ['bower:dev'], function() {
  return gulp.src( $.config.paths.bower.toUse + '/**/*' )
    .pipe(gulp.dest( $.config.paths.dist ));
});

// @end: bower
//------------------------------------------------------------------------------
// @begin: jshint

$.streams.jshint = $.lazypipe()
  .pipe( $.cached, 'jshint' )
  .pipe( $.jshint )
  .pipe( $.jshint.reporter, 'jshint-stylish' )
  .pipe( $.jshint.reporter, 'fail' );


gulp.task('jshint:tools', function() {
  return gulp.src( $.config.tools )
    .pipe( $.streams.jshint() );
});

gulp.task('jshint:project', function() {
  return gulp.src( $.config.project.js )
    .pipe( $.streams.jshint() );
});

gulp.task('jshint', ['jshint:tools', 'jshint:project']);

// @end: jshint
//------------------------------------------------------------------------------
// @begin: lintspaces

$.streams.lintspaces = $.lazypipe()
  .pipe( $.cached, 'lintspaces' )
  .pipe( $.lintspaces, { editorconfig: $.config.paths.editorconfig } )
  .pipe( $.lintspaces.reporter );


gulp.task('lintspaces:tools', function() {
  return gulp.src( $.config.tools )
    .pipe( $.streams.lintspaces() );
});

gulp.task('lintspaces:project:js', function() {
  return gulp.src( $.config.project.js )
    .pipe( $.streams.lintspaces() );
});

gulp.task('lintspaces:project:css', function() {
  return gulp.src( $.config.project.css )
    .pipe( $.streams.lintspaces() );
});

gulp.task('lintspaces:project:html', function() {
  return gulp.src( $.config.project.html )
    .pipe( $.streams.lintspaces() );
});

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

  $.browserSync({
    ui: false,
    port: 1337,
    server:{
      baseDir: 'dist'
    }
  });

});

gulp.task('webserver:dev', ['validate', 'bower:dev'], function() {

  $.browserSync({
    port: 1337,
    server:{
      baseDir: ['src', '.local/bower']
    }
  });

});

// @end: webserver
//------------------------------------------------------------------------------
// @begin: watch

gulp.task('watch', ['webserver:dev'], function() {

  gulp.watch(['src/**/*.html'], ['wf:project:html']);

  gulp.watch(['src/**/*.js'], ['wf:project:js']);

  gulp.watch(['src/**/*.css'], ['wf:project:css']);

});

gulp.task('wf:bs:reload', function() {
  $.reload();
});


gulp.task('wf:project:html', function( done ) {
  sequence(
    'lintspaces:project:html',
    'wf:bs:reload',
    done
  );
});

gulp.task('wf:project:js', function( done ) {
  sequence(
    [
      'jshint:project',
      'lintspaces:project:js'
    ],
    'wf:bs:reload',
    done
  );
});

gulp.task('wf:project:css', function( done ) {
  sequence(
    'lintspaces:project:css',
    'wf:bs:reload',
    done
  );
});

// @end: watch
//------------------------------------------------------------------------------
// @begin: main

// TODO: remove
gulp.task('temp', function() {
  $.projectInfoMsg();
});


gulp.task('default', ['watch'], function() {
  $.projectInfoMsg();
});

gulp.task('release', ['build'], function() {
  $.projectInfoMsg();
});

gulp.task('preview', ['webserver:dist'], function() {
  $.projectInfoMsg();
});

// @end: main
//==============================================================================
// @end: gulp tasks ============================================================
//==============================================================================
