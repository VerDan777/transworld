// const gulp = require('gulp');
const gulp = require('gulp');
const watch = require('gulp-watch');
const BrowserSync = require('browser-sync').create();

gulp.task('watch', ()=> {
    BrowserSync.init({
        server: {
            baseDir:'./src/dist'
        },
    })
}); 

// Pug
watch('./src/*.pug', ()=> {
    gulp.start('PugChanged');
});

// Styles
watch('./src/scss/**/*.scss', ()=> {
    gulp.start('CssInject');
})

gulp.task('PugChanged', ['PugRender'], ()=> {
    BrowserSync.reload();
})
gulp.task('CssInject',['styles'], ()=> {
    gulp.src('./src/dist/style.css')
    .pipe(BrowserSync.stream());
})