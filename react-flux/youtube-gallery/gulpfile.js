var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify'); // Converts JSX to JS
var source = require('vinyl-source-stream'); // Converts String to a stream

gulp.task('browserify', function(){
    browserify('./src/js/main.js')
    .transform('reactify')
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('dist/js'))
})

gulp.task('copy' , function(){
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist'));
    gulp.src('src/css/*.*')
        .pipe(gulp.dest('dist/css'));
    gulp.src('src/images/*.*')
        .pipe(gulp.dest('dist/images'));
    gulp.src('src/js/vendor/*.*')
        .pipe(gulp.dest('dist/js'));
})

gulp.task('default', ['browserify', 'copy'], function(){
    return gulp.watch('src/**/*.*', ['browserify', 'copy']);
})