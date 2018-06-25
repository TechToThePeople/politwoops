var gulp = require('gulp');
var googleWebFonts = require('gulp-google-webfonts');

gulp.task('fonts', function () {
  var options = {
	fontsDir: 'fonts/',
	cssDir: 'css/',
	cssFilename: 'fonts.css',
  relativePaths: true
  };
	return gulp.src('./src/fonts.list')
		.pipe(googleWebFonts(options))
		.pipe(gulp.dest('dist'))
		;
	});

gulp.task('html-copy',function(){
  return gulp
    .src(['src/index.html'])
    .pipe(htmlmin({
        collapseWhitespace: true
    }))

    .pipe(gulp.dest('./dist/'));
});

gulp.task('css-copy',function(){
  return gulp
    .src(['node_modules/daemonite-material/css/material.min.css',
    'node_modules/bootstrap/dist/css/bootstrap.min.css'])
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('js-copy',function(){
  return gulp
    .src(['node_modules/daemonite-material/js/material.min.js',
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/popper.js/dist/umd/popper.min.js',
      'node_modules/bootstrap/dist/js/bootstrap.min.js'])
    .pipe(gulp.dest('./dist/js/'));
});


gulp.task('css-minify',['css-compile'], function() {
    gulp.src(['./dist/css/*.css', '!dist/css/*.min.css'])
      .pipe(cssmin())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('./dist/css'))
});


gulp.task('init', ['fonts','css-copy','js-copy']);

