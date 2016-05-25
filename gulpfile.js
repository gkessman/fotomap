
var config = { 
	buildFilesFoldersRemove:[
		'build/scss/', 
		'build/js/!(*.min.js)',
		'build/bower.json',
		'build/bower_components/',
		'build/images/*.xcf'
	]
};

// Required

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	browserSync = require('browser-sync'),
	nodemon = require('gulp-nodemon'),
	del = require('del');

// Script Tasks

gulp.task('js', function() {
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
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.reload({ stream: true }));
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

// Watch Task

gulp.task('watch', function() {
	gulp.watch('public/scss/*.scss', ['styles']);
});


// Build Tasks

// clean out all files and folders from build folder
gulp.task('build:clean', function (cb) {
	del([
		'build/**'
	], cb());
});

// task to create build directory of all files
gulp.task('build:copy', ['build:clean'], function(){
    return gulp.src('public/**/*/')
    .pipe(gulp.dest('build/'));
});

// task to removed unwanted build files
// list all files and directories here that you don't want included
gulp.task('build:remove', ['build:copy'], function (cb) {
	del(config.buildFilesFoldersRemove, cb());
});

gulp.task('build', ['build:copy', 'build:remove']);

// Default Task

gulp.task('default', ['js', 'styles', 'browser-sync', 'watch']);