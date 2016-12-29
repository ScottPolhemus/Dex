var gulp = require('gulp')
var postcss = require('gulp-postcss')
var sass = require('gulp-sass')
var autoprefixer = require('autoprefixer')

module.exports = {
  build: function() {
    return gulp.src('./styles/scss/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(postcss([autoprefixer]))
      .pipe(gulp.dest('./styles/css'))
  }
}
