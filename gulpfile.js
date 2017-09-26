// Gulpfile Textile-Mall
// author: Fernando Ted 
// 02-18-17


var gulp = require("gulp");
var sass = require("gulp-sass");
var notify = require("gulp-notify");

// compile css
gulp.task("css-compile", function() {
	return gulp.src("./source/sass/*.scss")
	.pipe(sass({outputStyle:'compressed'}))
	.on('error', notify.onError({title: 'Erro ao compilar css', message: '<%= error.message %>'}))
	.pipe(gulp.dest("./dist/css"));
});

gulp.task("build-js", function() {
	return gulp.src([
		'./source/components/jquery/dist/jquery.js',
		'./source/components/bootstrap/dist/js/bootstrap.min.js',
		'./source/components/jquery.mobile-1.4.5/jquery.mobile-1.4.5.js'
	])
	.pipe(gulp.dest("./dist/js"));
});

// watch files
gulp.task("watch-files", function() {
	gulp.watch("./source/sass/*.scss",["css-compile"]);
});

// default command
gulp.task("default", ["css-compile", "build-js", "watch-files"]);