var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    plumber = require('gulp-plumber'),
    livereload = require('gulp-livereload');


gulp.task('styles', function() {
  return gulp.src('css/screen.scss')
    .pipe(plumber())
    .pipe(sass({style : 'expanded'}))
    .pipe(gulp.dest('css'))
    .pipe(livereload());
});


gulp.task('html', function() {
  return gulp.src('*.html')
    .pipe(livereload());
});


gulp.task('default', function() {
    gulp.start('styles');
});



gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('*.html').on('change', livereload.changed);
	gulp.watch(['css/*/*.scss','css/*.scss'],['styles']);
  //gulp.watch(['*.html'],['html']);
});
