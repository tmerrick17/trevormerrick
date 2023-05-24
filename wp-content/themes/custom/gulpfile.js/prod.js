'use strict';

const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postCss = require('gulp-postcss');
const cssNano = require('cssnano');
const prefix = require('autoprefixer');
const terser = require('gulp-terser');
const concat = require('gulp-concat');
const webpack = require('webpack-stream');
const gulpzip = require('gulp-zip');

const SASS_PATH = 'src/scss/**/*.scss';
const JS_PATH = 'src/js/**/*.js';

function scssMin(callback) {
  src(SASS_PATH)
    .pipe(sass().on('error', sass.logError))
    .pipe(postCss([prefix('last 2 versions'), cssNano()]))
    .pipe(concat('../style.css'))
    .pipe(dest('../'));
  callback()
};

function jsMin(callback) {
  src(JS_PATH)
    .pipe(webpack())
    .pipe(terser())
    .pipe(dest('./public/js'));
  callback()
}

function zip() {
  return src(
      '../custom/**/*',
      '!node_modules/**',
      '!gulpfile.js/**',
      '!src/**',
      '!package.json',
      '!package-lock.json',
    )
    .pipe(gulpzip('custom.zip'))
    .pipe(dest('../../../'))
}


module.exports = series([
  scssMin,
  jsMin,
  zip
]);
