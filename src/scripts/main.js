console.log('main.js');

// Load Css async w LoadCSS & +1 polyfill / https://www.npmjs.com/package/fg-loadcss?notice=MIvGLZ2qXNAEF8AM1kvyFWL8p-1MwaU7UpJd8jcG
var stylesheet = loadCSS( "styles/main.css" );
onloadCSS( stylesheet, function() {
    console.log( "LoadCSS > Stylesheet has loaded. Yay !" );

    $('.no-fouc').fadeIn(); // Jquery animation
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