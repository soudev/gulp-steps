
var gulp        = require('gulp'),
    $           = require('../$');

//---

gulp.task('clean:dist', $.del.bind(null, [ $.config.paths.dist ]));

gulp.task('clean:bower', $.del.bind(null, [ $.config.paths.bower.toUse ]));

gulp.task('clean', ['clean:dist', 'clean:bower']);
