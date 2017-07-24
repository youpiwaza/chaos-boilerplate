console.log('main.js');

// Load Css async w LoadCSS & +1 polyfill / https://www.npmjs.com/package/fg-loadcss?notice=MIvGLZ2qXNAEF8AM1kvyFWL8p-1MwaU7UpJd8jcG
var stylesheet = loadCSS( "styles/main.css" );
onloadCSS( stylesheet, function() {
    console.log( "LoadCSS > Stylesheet has loaded. Yay !" );

    // + No Fouc management
    $('.no-fouc').fadeIn(); // Lovely Jquery animation on load

    // Fouc out management
	$('a').click(function(e) {

		e.preventDefault();
		newLocation = this.href;

		$('body').fadeOut(200, function() {
			window.location = newLocation;
		});
	});
});



// Load Hyphenopoly plugins, manage font césure & text FOUC
// Need to be loaded beofre HyphenopolyLoader, cf. gulpfile paths.scripts.src
var Hyphenopoly = {
	require: {
		"en-us": "hyphenation"
	},
	paths: {
		patterndir: 'assets/hyphenopoly/patterns/',
		maindir: 'assets/hyphenopoly/'
	},
	setup: {
		classnames: {
			"hyphenate": {}
		}
	}
};