"use strict";

var _require = require('gulp'),
    series = _require.series,
    src = _require.src,
    dest = _require.dest;

var sass = require('gulp-dart-sass');

var autoprefixer = require('gulp-autoprefixer');

var cssmin = require('gulp-cssmin');

var path = require('path');

function compile() {
  // TODO: 每个文件夹下的scss
  return src(path.resolve(__dirname, '../packages/theme-chalk/scss/*.scss')).pipe(sass.sync()).pipe(autoprefixer({
    cascade: false
  })).pipe(cssmin()).pipe(dest(path.resolve(__dirname, '../lib/theme-chalk/')));
}

function copyfont() {
  return src(path.resolve(__dirname, '../packages/theme-chalk/fonts/**')).pipe(cssmin()).pipe(dest(path.resolve(__dirname, '../packages/theme-chalk/fonts')));
}

exports.build = series(compile, copyfont);