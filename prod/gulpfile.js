//// Requires

var gulp 			= require('gulp'),
	prefix 			= require('gulp-autoprefixer'),
	minifycss 		= require('gulp-minify-css'),
	pug 			= require('gulp-pug'),
	sass 			= require('gulp-sass');



//// Vars
var paths = {
	// Sass paths
    styles: {
        src: './src/styles',
        files: './src/styles/**/*.scss',
        dest: './build/',
        destDev: './src/styles/css-unminified'
    }
}



//// Tasks

/// Pugjs html templates compilation
gulp.task('html', function(){
  return gulp.src('src/templates/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('build/html'))
});


// Sass compilation
gulp.task('sass', function (){
    // Taking the path from the above object
    gulp.src(paths.styles.files)
    // Sass options - make the output expanded and add the source map
    // Also pull the include path from the paths object
    .pipe(sass({
        outputStyle: 'expanded',
        sourceComments: 'map',
        includePaths : [paths.styles.src]
    }))
    // If there is an error, don't stop compiling but use the custom displayError function
    .on('error', function(err){
        displayError(err);
    })
    // Pass the compiled sass through the prefixer with defined 
    .pipe(prefix(
        'last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'
    ))
    // Un compressed css version for debug purposes
    .pipe(gulp.dest(paths.styles.destDev))
    .pipe(minifycss())
    // Funally put the compiled sass into a css file
    .pipe(gulp.dest(paths.styles.dest))
});


//// Commands
gulp.task('default', [ 'html', 'sass' ]);



//// Functions

// A display error function, to format and make custom errors more uniform
// Could be combined with gulp-util or npm colors for nicer output
var displayError = function(error) {
    // Initial building up of the error
    var errorString = '[' + error.plugin + ']';
    errorString += ' ' + error.message.replace("\n",''); // Removes new line at the end
    // If the error contains the filename or line number add it to the string
    if(error.fileName)
        errorString += ' in ' + error.fileName;
    if(error.lineNumber)
        errorString += ' on line ' + error.lineNumber;
    // This will output an error like the following:
    // [gulp-sass] error message in file_name on line 1
    console.error(errorString);
}



//// Tests related stuff

/// Vars

var testPaths = {
	// Sass paths
    styles: {
        src: './tests/sass',
        files: './tests/sass/**/*.scss',
        dest: './tests/sass',
        destDev: './tests/sass/css-unminified'
    }
}

/// Tasks

// Pugjs tests compilation
gulp.task('html-test', function(){
  return gulp.src('tests/pugjs/templates/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('tests/pugjs/html/'))
});

// Sass compilation
gulp.task('sass-test', function (){
    gulp.src(testPaths.styles.files)
    .pipe(sass({
        outputStyle: 'expanded',
        sourceComments: 'map',
        includePaths : [testPaths.styles.src]
    }))
    .on('error', function(err){
        displayError(err);
    })
    .pipe(prefix(
        'last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'
    ))
    .pipe(gulp.dest(testPaths.styles.destDev))
    .pipe(minifycss())
    .pipe(gulp.dest(testPaths.styles.dest))
});

// Commands
gulp.task('test', [ 'html-test', 'sass-test' ]);


//// Thanks 
/*
 * https://www.mikestreety.co.uk/blog/a-simple-sass-compilation-gulpfile-js
 */