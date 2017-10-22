const gulp = require('gulp');
const images = require('gulp-imagemin');

gulp.task('images', ()=> {
    return gulp.src("./src/dist/img/**/*.{png,jpg,gif}")
    .pipe(images([
        images.optipng({optimizingLevel: 3}),
        images.jpegtran({progressive: true})
    ]))
    .pipe(gulp.dest("build/img"));
})