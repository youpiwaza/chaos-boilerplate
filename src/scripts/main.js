console.log('main.js');

$( document ).ready(function() { 

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




	// Load Hyphenopoly plugins, manage font césure & text FOUC
	// Need to be loaded beofre HyphenopolyLoader, cf. gulpfile paths.scripts.src
	// Load Hyphenopoly plugins, manage font césure & text FOUC 
	// Need to be loaded beofre HyphenopolyLoader, cf. gulpfile paths.scripts.src 
	var Hyphenopoly = { 
		require: { 
			"en-us": 	"hyphenation" 
		}, 
		paths: { 
			patterndir: 'assets/hyphenopoly/patterns/', 
			maindir: 	'assets/hyphenopoly/' 
		}, 
		setup: { 
			classnames: { 
				"hyphenate": {} 
			}
		}
	}; 

}); 

// test babel 
// let a = 42;
// console.log(a); //40
