'use strict';

let gulp = require('gulp'),
gt = require('gulp-load-plugins')();
    

gulp.task('pug', function () {
    return gulp.src('src/pug/*.pug')
    .pipe(gt.pug({
        pretty: true
    }))
    .pipe(gulp.dest('assets'));
});

gulp.task('scss', function () {
    return gulp.src('src/static/scss/*.scss')
    .pipe(gt.sass({
        outputStyle: 'nested'
    }))
    // .pipe(gt.csso())
    .pipe(gulp.dest('assets/css'));
})