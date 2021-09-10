let {src,dest,watch} = require('gulp'),
    imagemin = require('gulp-imagemin'),
    htmlmin = require('gulp-htmlmin'),
    sass = require('gulp-sass')(require('sass')),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify');

function fnIndex(){
    return src('./src/index.html')
    .pipe(dest('./dist'));
}
function fnHTML(){
    return src('./src/html/*.html')
    .pipe(htmlmin())
    .pipe(dest('./dist/html'));
}
function fnImg(){
    return src('./src/img/*')
    .pipe(imagemin())
    .pipe(dest('./dist/img'));
}
function fnCSS(){
    return src('./src/sass/*.scss')
    .pipe(sass())
    .pipe(cssnano())
    .pipe(rename({suffix : '.min'}))
    .pipe(dest('./dist/css'));
}
function fnJS(){
    return src('./src/js/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(rename({suffix : '.min'}))
    .pipe(dest('./dist/js'));
}
exports.index = fnIndex;
exports.html = fnHTML;
exports.img = fnImg;
exports.js = fnJS;
exports.css = fnCSS;