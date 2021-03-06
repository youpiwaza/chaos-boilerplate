//// Requires
/// gulp stuff
const 	browserSync 			= require('browser-sync').create(),
		gulp 					= require('gulp'),
		prefix 					= require('gulp-autoprefixer'),
		babel 					= require('gulp-babel'),
		cached 					= require('gulp-cached'),
		cleanCss 				= require('gulp-clean-css'),
		concat  				= require('gulp-concat'),
		filter   				= require('gulp-filter'),
		gulpif  				= require('gulp-if'),
		imagemin 				= require('gulp-imagemin');
		notify 					= require('gulp-notify'),
		plumber					= require('gulp-plumber'),
		pug 					= require('gulp-pug'),
		pugInheritance  		= require('gulp-pug-inheritance'),
		sass 					= require('gulp-sass'),
		sassPartialsImported 	= require('gulp-sass-partials-imported'), // during watch, force recompile of un modified scss files that imports modified sass files // allow sass watch with cache
		sourcemaps 				= require('gulp-sourcemaps'),
		uglify 					= require('gulp-uglify'),
		imageminJpegRecompress 	= require('imagemin-jpeg-recompress'),
		imageminPngquant 		= require('imagemin-pngquant');

// "node-refills": "^1.0.1" // useless af, need copy paste from website


//// Vars
/// ressources paths & dest
const paths = {
	// assets
	assets: {
							dest: 				'build/assets',
							destRootFiles: 		'build/',
							src: [
								// Straight all from /assets ...
								'src/assets/**/*.*',

								// .. except images as they will be treated by imagemin task
								// Manuals file type exceptions to allow copy of .html, allowing SEO crawlers for refs (cf. .htaccess)
								'!src/assets/visuals/images/**/*.jpg',
								'!src/assets/visuals/images/**/*.png',
								'!src/assets/visuals/images/**/*.gif'
							],
							srcRootFiles: [
								// copy .htaccess and root files stuff
								'src/.htaccess',
								'src/crossdomain.xml',
								'src/humans.txt',
								'src/robots.txt'
							]
	},

	// base src
	build: 					'build/',

	// images (for minification)
	images: {
							dest: 	'build/assets/visuals/images/',
							src: 	'src/assets/visuals/images/**/*.*'
	},

	// html
	pug: {
							dest: 			'build/',
							src: 			'src/*.pug',
							templateDir: 	'src/templates/',
							templateSrc: 	'src/templates/**/*.pug',
							srcS: 			['src/*.pug', 'src/templates/**/*.pug']
	},

	// scripts
	scripts: {
							dest: 	'./build/scripts',
							// No basic npm jquery stuff, need to hard copy last version // huehue
							src: [	
								'./src/scripts/libs/jquery-3.3.1.min.js',

								// Css async loading
								// https://www.npmjs.com/package/fg-loadcss?notice=MIvGLZ2qXNAEF8AM1kvyFWL8p-1MwaU7UpJd8jcG
								// './node_modules/fg-loadcss/src/loadCSS.js', // loadCSS script
								// './node_modules/fg-loadcss/src/onloadCSS.js', // loadCSS events, allw console.log check
								// './node_modules/fg-loadcss/src/cssrelpreload.js', // loadCSS rel=preload polyfill script

								// './src/scripts/**/*.js',
								'./src/scripts/main.js',

								'./src/assets/hyphenopoly/Hyphenopoly_Loader.js' // needs to be loaded after main script, as it defines a needed var
							]
	},
	
	src: 					'src/',
	
	// sass
	styles: {
		dest: 				'./build/styles',
		destDev: 			'./src/styles/css-unminified',
		files: 				'./src/styles/**/*.scss',
		src: 				'./src/styles',
		srcBourbon: 		require('node-bourbon').includePaths,
		srcNeat: 			require('node-neat').includePaths,
		srcNormalize: 		require('node-normalize-scss').includePaths
	},

	// watch
	watch: {
		scripts: 			'src/scripts/**/*.js',
		styles: 			'src/styles/**/*.scss',
		templates: 			[
								'src/templates/*.pug',
								'src/*.pug'
							]
	}
}




//// Tasks

/// Browsersync server, for test purpose
gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: paths.build
		}
	});
});


/// Copy of assets dir, check paths.assets for subtilities
gulp.task('copy-assets', function() {
	gulp.src(paths.assets.srcRootFiles)
		.pipe(gulp.dest(paths.assets.destRootFiles));

	return gulp.src(paths.assets.src)
		.pipe(gulp.dest(paths.assets.dest));
});



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

		//find files that depend on the files that have changed
		.pipe(pugInheritance({basedir: 'src/', skip: 'node_modules'}))

		//filter out partials (folders and files starting with "_" )
		.pipe(filter(function (file) {
            return !/\/_/.test(file.path) && !/^_/.test(file.relative);
        }))

		//process pug templates
		.pipe(pug())

		//save all the files
		.pipe(gulp.dest(paths.pug.dest))

		// Call browser reload
		.pipe(browserSync.stream());
});



// Image minification
// lossless + progressive + strip all (pagespeed recommandations)
gulp.task('imagemin', function () { 
	return 	gulp.src(paths.images.src)
		.pipe(imagemin([
			imagemin.gifsicle({ interlaced: true }),

			imageminJpegRecompress({
				max: 80,
				min: 70,
				progressive: true
		}),

		imageminPngquant({quality: '75-85'}),
			imagemin.svgo({
				plugins: [{ removeViewBox: false }]
			})
		]))

		.pipe(gulp.dest(paths.images.dest));
});



// js
gulp.task('js', function () {

	// Delays for abel es6 & uglyfier due to Jquery & Hyphenopoly_Loader inclusions/re-minify/concat/etc.
	// Add different files for dev/watch & concat only on production ?

	// OU ALORS Babeliser/uglify seulement ce dont on a besoin, puis concat avec les libs externes déjà minifiées *-*
	
	return gulp.src(paths.scripts.src)
	// return gulp.src('src/scripts/main.js')
		.pipe(sourcemaps.init())							// 100ms
		/// Manage ES6 via babel
		// .pipe(babel({									// 2.5s ? // Lié au fait qu'on envoie un dossier js, et non une liste de fichiers // 400-500ms avec juste main.js
		// 	presets: ['env']
		// }))
		// .pipe(uglify())									// 2s ? // Lié au fait qu'on envoie une liste de fichiers // 130-180ms avec juste main.js
		.pipe(concat('main.js'))							// 100ms
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(paths.scripts.dest))

		// Call browser reload
		.pipe(browserSync.stream());


});



// Sass compilation
gulp.task('sass', function (){
	// Taking the path from the above object
	return gulp.src(paths.styles.files)
	
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

		// caching to fasten watch
		.pipe(cached('sassCache'))

		// during watch, force recompile of un modified scss files that imports modified sass files
		// allow sass watch with cache
		.pipe(sassPartialsImported(paths.styles.src))

		// Sass options - make the output expanded and add the source map
		// Also pull the include path from the paths object
		.pipe(sass({
			outputStyle: 'expanded',
			sourceComments: 'map',
			includePaths : [ paths.styles.srcNormalize, paths.styles.srcBourbon, paths.styles.srcNeat, paths.styles.src ]
		}))
		// If there is an error, don't stop compiling but use the custom displayError function
		
		// Pass the compiled sass through the prefixer with defined 
		.pipe(prefix(
			'last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'
		))
		// Uncompressed css version for debug purposes
		.pipe(gulp.dest(paths.styles.destDev))
		
		// Minify w. sourcemaps
		.pipe(sourcemaps.init())
		.pipe(cleanCss())
		.pipe(sourcemaps.write())

		// Finally put the compiled sass into a css file
		.pipe(gulp.dest(paths.styles.dest))

		// Call browser reload
		.pipe(browserSync.stream());
});



// Dedicated watch functions to allow independant re-compile & force browser reload
gulp.task('watch-html', ['html'], function (done) {

	// Used for caching during watch, cf. html()
	global.isWatching = true;
    
    browserSync.reload();
    done();
});

gulp.task('watch-js', ['js'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('watch-sass', ['sass'], function (done) {
    browserSync.reload();
    done();
});



//// Commands
gulp.task('default', [ 'copy-assets', 'html', 'js', 'sass', 'imagemin' ]);
gulp.task('devBuild', [ 'html', 'sass', 'js' ]);
gulp.task('w', ['devBuild'], watch); // watch



//// Functions

// dedicated function for watch task
function watch() {

	// browser-sync local server
	gulp.start('browser-sync');

	// Independant calls for independant reloads
	// Dedicated functions to force browser reload
    gulp.watch(paths.watch.templates, 	['watch-html']);
    gulp.watch(paths.watch.scripts, 	['watch-js']);
    gulp.watch(paths.watch.styles, 		['watch-sass']);
}



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


//// Thanks to
/*
 * https://www.mikestreety.co.uk/blog/a-simple-sass-compilation-gulpfile-js
 * .. and to all awesome guys you worked, work or will work on open source plugins
 */