var gulp = require('gulp')

// var scripts = require('./tasks/scripts')
var styles = require('./tasks/styles')
var server = require('./tasks/server')

// gulp.task('browserify', scripts.build)
// gulp.task('browserify:watch', scripts.watch)

gulp.task('sass', styles.build)
gulp.task('sass:watch', ['sass'], function () {
  gulp.watch('./styles/**/*.scss', ['sass'])
})

gulp.task('connect', server.connect)
gulp.task('reload', server.reload)

gulp.task('build', ['sass'])
gulp.task('watch', ['sass:watch', 'connect', 'reload'])

gulp.task('default', ['watch'])
