const gulp = require('gulp');
const sass = require('gulp-sass');
const SassImporter = require('sass-module-importer');
const notify = require('gulp-notify');
const minify = require('gulp-csso');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const mqpacker = require('gulp-combine-mq');

gulp.task('styles', ()=> {
    return gulp.src('./src/scss/**/*.scss')
    .pipe(sass({impoter: SassImporter()}))
    .on('error', notify.onError(function(error) {
        return {
            title: 'Styles',
            message: error.message
        }
    }))
    .pipe(mqpacker({
        beautify: true
    }))
    .pipe(gulp.dest('./src/dist'))
    .pipe(minify())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./src/dist'))
})