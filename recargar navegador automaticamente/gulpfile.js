// npm init -y
// npm install --save-dev gulp browser-sync

const gulp = require('gulp'),
      browserSync = require('browser-sync').create();

gulp.task('default', () => {
  browserSync.init({
    server: './'
  });
  gulp.watch('./*.html').on('change', browserSync.reload)
  gulp.watch('./*.css').on('change', browserSync.reload)
  gulp.watch('./*.js').on('change', browserSync.reload)
})