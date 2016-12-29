var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var babel = require('babelify');
var csv = require('node-csvify');

function compile(watch) {
  var bundler = watchify(
    browserify('./src/index.js', { debug: true })
      .transform(babel)
      .transform(csv)
  );

  function rebundle() {
    bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end'); })
      .pipe(source('index.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./lib'));
  }

  if (watch) {
    bundler.on('update', function() {
      console.log('-> bundling...');
      rebundle();
    });

    bundler.on('log', function(msg) {
      console.log(msg);
    })
  }

  rebundle();
}

module.exports = {
  build: () => {
    return compile();
  },
  watch: () => {
    return compile(true);
  }
}
