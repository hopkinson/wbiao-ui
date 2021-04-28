const { series, src, dest } = require('gulp')
const sass = require('gulp-dart-sass')
const autoprefixer = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')
const path = require('path')

function compile() {
  // TODO: 每个文件夹下的scss
  return src(path.resolve(__dirname, '../packages/theme-chalk/scss/*.scss'))
    .pipe(sass.sync())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(cssmin())
    .pipe(dest(path.resolve(__dirname, '../lib/theme-chalk/')))
}

function copyfont() {
  return src(path.resolve(__dirname, '../packages/theme-chalk/fonts/**'))
    .pipe(cssmin())
    .pipe(dest(path.resolve(__dirname, '../packages/theme-chalk/fonts')))
}

exports.build = series(compile, copyfont)
