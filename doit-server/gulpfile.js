// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
gulp.task('lint', function() {
    return gulp.src(['!./node_modules/**/*.js', './**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
