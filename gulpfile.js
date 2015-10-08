'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var scsslint = require('gulp-scss-lint');
var livereload = require('gulp-livereload');

gulp.task('sass', function () {
  gulp.src(['styles.scss'])
    .pipe(sass()
      .on('error', gutil.log))
    .pipe(gulp.dest('.'))
    .pipe(livereload());
});

gulp.task('reload', function () {
  gulp.src([
    '*.html'
  ]).pipe(livereload());
});

gulp.task('scss-lint', function () {
  gulp.src([
    '*.scss'
  ])
  .pipe(scsslint({
    'config': '.scss-lint.yml'
  }));
});

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('*.html', ['reload']);
  gulp.watch('*.scss', ['sass']);
});

gulp.task('build', ['sass']);

gulp.task('default', ['build', 'watch']);
