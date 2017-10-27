const gulp = require('gulp');
const ghPages = require('gulp-gh-pages');

gulp.task('pages', ()=> {
    return gulp.src('./src/dist/**/*')
    .pipe(ghPages())
})