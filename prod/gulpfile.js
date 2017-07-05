//// Requires

var gulp 			= require('gulp');
var pug 			= require('gulp-pug');



//// Tasks

/// Pugjs html templates compilation
gulp.task('html', function(){
  return gulp.src('src/templates/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('build/html'))
});

gulp.task('html-test', function(){
  return gulp.src('tests/pugjs/templates/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('tests/pugjs/html/'))
});



//// Commands
gulp.task('default', 	[ 'html' ]);
gulp.task('test', 		[ 'html-test' ]);