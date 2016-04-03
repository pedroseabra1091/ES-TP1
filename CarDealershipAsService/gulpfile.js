var gulp = require('gulp'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream');

gulp.task('default', function () {
    browserify({entries: 'static/js/index.js', extensions: ['.js'], debug: true})
        .transform(babelify, { presets: ['es2015'] })
        .bundle()
        .pipe(gulp.dest('/static/js'));
});