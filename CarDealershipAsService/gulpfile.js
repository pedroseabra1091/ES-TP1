var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var rename = require('gulp-rename');
var es = require('event-stream');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');

gulp.task('transform', function () {
	var files = [
		'index.jsx'
	];
	var tasks = files.map(function(entry){
		return browserify({entries: './static/jsx/' + entry})
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .on('error', function(err){
            console.log(err.stack);
            this.emit('end');
        })
        .pipe(source(entry))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(rename({
        	extname: '.js'
        }))
        .pipe(gulp.dest('./static/js'));
	});
	return es.merge.apply(null,tasks);
});
gulp.task('watch', ['transform'], function () {
    gulp.watch('./static/jsx/*.jsx', ['transform']);
});
gulp.task('default', ['watch']);