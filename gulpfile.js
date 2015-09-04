var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var watch = require('gulp-watch');

gulp.task('less', function () {
  return gulp.src('./components/style.less')
    .pipe(less())
    .pipe(gulp.dest('./components'));
});

gulp.task('watch', function() {
  gulp.watch('./**/*.less', ['less']);
});

gulp.task('default', ['watch']);
