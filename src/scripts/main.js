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

	//// Menus behavior
	/// Menu top
	$('.menu-item').click(onMenuItemClick);

}); 

function onMenuItemClick ( event ) {
	var id = event.currentTarget.id;

	switch(id){
		
		case "menu-burger" :
			console.log("menu-burger");
			break;
		
		case "menu-fav" :
			console.log("menu-fav");
			break;

		case "menu-home" :
			console.log("menu-home");
			break;

		case "menu-notif" :
			console.log("menu-notif");
			break;

		case "menu-profile" :
			console.log("menu-profile");
			break;

	}
}