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
  return gulp.src([src('**'), '!' + src('**/*.js'), src('client/static/**')], {
    base: src('.')
  })
    .pipe(gulp.dest(debug('.')));
});

gulp.task('debug:build:server:js', function() {
  return gulp.src([src('**/*.js'), '!' + src('client/static/**')], {
    base: src('.')
  })
    .pipe(babel({
      presets: ['es2015', 'stage-0'],
      plugins: ['transform-runtime']
    }))
    .on('error', function(err) {
      console.log(err.stack);
    })
    .pipe(gulp.dest(debug('.')));
});

gulp.task('debug:build:client:js', function() {
  return gulp.src([src('client/static/**/*.js'), '!' + src('client/static/assets/**')], {
    base: src('.')
  })
    .pipe(babel({
      presets: ['es2015', 'stage-0']
    }))
    .pipe(ngAnnotate())
    //.pipe(uglify())
    .pipe(gulp.dest(debug('.')));
});

gulp.task('production:build:html', function() {
  return gulp.src(src('**/*.html'), {
    base: src('')
  })
    .pipe(htmlmin())
    .pipe(gulp.dest(debug('.')));
});

gulp.task('debug:build:client:css', function() {
  return gulp.src(src('client/static/css/*.css'), {
    base: src('.')
  })
    .pipe(postcss([
      autoprefixer({
        browsers: [
          'last 2 versions'
        ],
        cascade: true,
        remove: true
      }),
      cssnano
    ]))
    .pipe(gulp.dest(debug('.')))
});


gulp.task('debug:build:client', gulp.series([
  'debug:build:client:js',
  'debug:build:client:css'
]));

gulp.task('debug:build:server', gulp.series([
  'debug:build:server:js'
]));

gulp.task('debug:build', gulp.series([
  'debug:copy',
  'debug:build:server',
  'debug:build:client'
]));

gulp.task('debug:watch:client', function() {
  return gulp.watch(src('**'), gulp.series(['debug:build:client']));
});

gulp.task('debug:watch:server', function() {
  return gulp.watch(src('**'), gulp.series(['debug:build:server']));
});

gulp.task('debug:watch', function() {
  return gulp.watch(src('**'), gulp.series(['debug:build']));
});

//build front end for debug
gulp.task('client', gulp.series([
  'debug:build:client',
  'debug:watch:client'
]));

gulp.task('server', gulp.series([
  'debug:build:server',
  'debug:watch:server'
]));

gulp.task('build', gulp.series([
  'debug:build'
]));

gulp.task('debug', gulp.series([
  'debug:build',
  'debug:watch'
]));

gulp.task('clean', function(cb) {
  return del(debug('.'), {
    force: true
  }, cb);
})



//build release version product
//gulp.task('release')
