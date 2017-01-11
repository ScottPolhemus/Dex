var gulp = require('gulp')
var connect = require('gulp-connect')

module.exports = {
  connect: function() {
    connect.server({
      root: './',
      livereload: true
    });
  },
  reload: function() {
    gulp.src(['./lib/*.js', './styles/*.css'])
      .pipe(connect.reload())
  }
}
