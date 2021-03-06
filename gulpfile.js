var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    plumber = require('gulp-plumber'),
    livereload = require('gulp-livereload'),
    jshint = require('gulp-jshint'),
    connect = require('gulp-connect'),
    htmlhint = require("gulp-htmlhint"),
    autoprefixer = require('gulp-autoprefixer'),
    //babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    browserify = require('gulp-browserify');

// gulp.task('styles', function() {
//   return gulp.src('css/screen.scss')
//     .pipe(plumber())
//     .pipe(sass({style : 'expanded'}))
//     .pipe(gulp.dest('css'))
//     .pipe(livereload());
// });


gulp.task('styles', function() {
    return sass('css/screen.scss', { style: 'expanded' })
    .pipe(plumber())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('css'))
    .pipe(livereload());
});


gulp.task('scripts',function() {
  return gulp.src('js/src/scripts.js')
    
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))

    //.pipe(jshint())    
    .pipe(browserify({
      insertGlobals : true
    }))
    .pipe(concat('js/scripts.js'))

    
    .pipe(gulp.dest('.'));
});

gulp.task('htmlhint',function() {
  return gulp.src('index.html')
    .pipe(htmlhint('.htmlhintrc'))
    .pipe(htmlhint.reporter());
});

gulp.task('connect', function() {
  connect.server({
    port: 9090
  });
});

/*
gulp.task('html', function() {
  return gulp.src('*.html')
    .pipe(livereload());
});
*/

gulp.task('default', function() {
    gulp.start('styles');
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('*.html').on('change', livereload.changed);
  gulp.watch('index.html',['htmlhint']);

  gulp.watch('js/*.js').on('change', livereload.changed);
  gulp.watch('js/src/scripts.js',['scripts']);

  //gulp.watch(['img/*.png','img/*.jpg','img/*/*.png','img/*/*.jpg']).on('change', livereload.changed);
  gulp.watch(['css/*/*/*/*.scss', 'css/*/*/*.scss', 'css/*/*.scss','css/*.scss'],['styles']);
  //gulp.watch(['*.html'],['html']);
});


gulp.task('dev', ['connect', 'watch']);
