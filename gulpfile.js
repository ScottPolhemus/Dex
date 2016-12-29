var gulp = require('gulp')

var scripts = require('./tasks/scripts')
var styles = require('./tasks/styles')

gulp.task('browserify', scripts.build)
gulp.task('browserify:watch', scripts.watch)

gulp.task('sass', styles.build);
gulp.task('sass:watch', function () {
  gulp.watch('./styles/**/*.scss', ['sass'])
})

gulp.task('build', ['browserify', 'sass'])
gulp.task('watch', ['browserify:watch', 'sass:watch'])

gulp.task('default', ['watch'])
