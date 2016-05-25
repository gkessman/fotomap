// Required

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	browserSync = require('browser-sync'),
	nodemon = require('gulp-nodemon');

// Script Tasks

gulp.task('scripts', function() {
	// console.log('Hello world!');
	gulp.src(['public/js/*.js', '!public/js/*.min.js'])
	.pipe(rename({suffix:'.min'}))
	.pipe(uglify())
	.pipe(gulp.dest('public/js'));
});

// Compile SCSS

gulp.task('styles', function () {
  return gulp.src('public/scss/style.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('public/css'));
});

// Reload Browser

gulp.task('browser-sync', ['nodemon'], function() {
	browserSync.init(null, {
		proxy: "http://localhost:3000",
		files: ["public/**/*.*"],
		port: 7000
	});
});

// Reload Node via Nodemon

gulp.task('nodemon', function(cb) {
	var started = false;

	return nodemon({
		script: 'server.js'
	}).on('start', function() {
		if (!started) {
			cb();
			started = true;
		}
	});
});

// Default Task

gulp.task('default', ['scripts', 'browser-sync']);