const gulp = require('gulp'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer');

const supported = [
  'last 2 versions',
  'safari >= 8',
  'ie >= 10',
  'ff >= 20',
  'ios 6',
  'android 4'
];      

gulp.task('sass', ()=>
  gulp.src('./scss/**/*.scss')
    .pipe(sass({
      outputStyle: 'expanded',
      sourceComments: true
    }))
    .pipe(gulp.dest('./dist/css'))
);
gulp.task('default', ()=> {
  gulp.watch('./scss/**/*.scss', [sass]);
});