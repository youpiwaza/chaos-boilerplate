console.log('main.js');

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