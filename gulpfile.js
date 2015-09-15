var gulp = require('gulp'),
    data = require('gulp-data'),
    jade = require('gulp-jade');
gulp.task('templates', function() {
    return gulp.src('./src/jade/*.jade')
        .pipe(data( function(file) {
            return require('./src/jade/data.json');
        } ))
        .pipe(jade())
        .pipe(gulp.dest('./dest/'));
});
gulp.task('default', ['templates']);