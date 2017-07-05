//// Requires

var gulp 			= require('gulp'),
	prefix 			= require('gulp-autoprefixer'),
	minifycss 		= require('gulp-minify-css'),
	notify 			= require('gulp-notify'),
	plumber			= require('gulp-plumber'),
	pug 			= require('gulp-pug'),
	sass 			= require('gulp-sass'),
	util 			= require('gulp-util');



//// Vars
/// ressources paths & dest
var paths = {
	// assets
	assets: {
		src: 'src/assets/**/*.*',
		dest: 'build/assets'
	},

	// html
	pug: {
		src: 'src/*.pug',
		dest: 'build/'
	},

	// sass
	styles: {
		src: './src/styles',
		files: './src/styles/**/*.scss',
		dest: './build/styles',
		destDev: './src/styles/css-unminified'
	},

	// watch
	watch: {
		scripts: 'src/scripts/**/*.js',
		styles: 'src/styles/**/*.scss',
		templates: 'src/**/*.pug'
	}
}



//// Tasks

/// Straight copy of assets
gulp.task('copy-assets', function() {
	return gulp.src(paths.assets.src)
		.pipe(gulp.dest(paths.assets.dest));
});

/// Pugjs html templates compilation
gulp.task('html', function(){
	return gulp.src(paths.pug.src)

		// prevent watch crash on error
		.pipe(plumber({
			errorHandler: function(err) {
	            notify.onError({
	                title: "Gulp error in " + err.plugin,
	                // message:  err.toString()
	                message:  err.message
	            })(err);
	        },
	        handleError: function (err) {
	            console.log(err);
	            this.emit('end');
	        }
	    }))

		.pipe(pug())
		.pipe(gulp.dest(paths.pug.dest));
});


// Sass compilation
gulp.task('sass', function (){
	// Taking the path from the above object
	gulp.src(paths.styles.files)
	
	// prevent watch crash on error
	.pipe(plumber({
		errorHandler: function(err) {
            notify.onError({
                title: "Gulp error in " + err.plugin,
                // message:  err.toString()
                message:  err.message
            })(err);
        },
        handleError: function (err) {
            console.log(err);
            this.emit('end');
        }
    }))

	// Sass options - make the output expanded and add the source map
	// Also pull the include path from the paths object
	.pipe(sass({
		outputStyle: 'expanded',
		sourceComments: 'map',
		includePaths : [paths.styles.src]
	}))
	// If there is an error, don't stop compiling but use the custom displayError function
	
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
gulp.task('default', [ 'copy-assets', 'html', 'sass' ]);
gulp.task('devBuild', [ 'html', 'sass' ]);
gulp.task('watch', ['devBuild'], function () {  
	gulp.watch(
		[	
			// paths.watch.scripts,
			paths.watch.styles,
			paths.watch.templates
		],
		[	
			// 'devBuild',
			'sass',
			'html'
		]
	);
});


//// Functions




//// Tests related stuff

/// Vars

/// tests ressources paths & dest
var testPaths = {
	// html
	pug: {
		src: 'tests/pugjs/templates/*.pug',
		dest: 'tests/pugjs/html/'
	},

	// sass
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
	return gulp.src(testPaths.pug.src)
		.pipe(pug())
		.pipe(gulp.dest(testPaths.pug.dest))
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