const gulp = require('gulp');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const inject = require('gulp-inject-string');
const ngAnnotate = require('gulp-ng-annotate');
const htmlmin = require('gulp-htmlmin');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sprites = require('postcss-sprites').default;
const cssnano = require('cssnano');
const cached = require('gulp-cached');
const uglify = require('gulp-uglify');
const del = require('del');
const path = require('path');

function src(relPath) {
  return path.resolve(__dirname, 'src', relPath);
}

function dist(relPath) {
  return path.resolve(__dirname, 'dist', relPath);
}

function debug(relPath) {
  return path.resolve(__dirname, 'debug', relPath);
}

gulp.task('debug:copy', function() {
  return gulp.src([src('**'), '!' + src('**/*.js'),
    '!' + src('**/*.css')], {
    base: src('.')
  })
    .pipe(gulp.dest(debug('.')));
});

gulp.task('debug:build:all', function() {
  return gulp.src([src('**/*.js')])
    .pipe(babel({
      presets: ['es2015', 'stage-0'],
      plugins: ['transform-runtime']
    }))
    .on('error', function(err) {
      console.log(err.stack);
    })
    .pipe(gulp.dest(debug('.')));
});

gulp.task('debug:build', gulp.series([
  'debug:copy',
  'debug:build:all'
]));

gulp.task('debug:watch', function() {
  return gulp.watch(src('**'), gulp.series(['debug:build']));
})

gulp.task('debug', gulp.series(['debug:build', 'debug:watch']));
