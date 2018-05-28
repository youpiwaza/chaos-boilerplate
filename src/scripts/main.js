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


var menuOpen = false;
function onMenuItemClick ( event ) {
	// get menu-item id
	var id = event.currentTarget.id;

	if(id != 'menu-home')
		if(menuOpen != id) {

			if(!menuOpen) {
				// Open menu
				$('.menu-contents').slideDown();
			
				// Close all contents
				$('.menu-content').hide();

				// display it's content
				$('.' + id).show();
			}
			else {
				// Close all contents
				$('.menu-content').fadeOut();

				// display it's content
				$('.' + id).fadeIn();
			}

			menuOpen = id;
		}
		else {
			closeMenu();
		}


	// Special behavior
	switch(id){

		case "menu-burger" :
			console.log("menu-burger");
			break;
		
		case "menu-fav" :
			console.log("menu-fav");
			break;

		case "menu-home" :
			console.log("menu-home");
			
			closeMenu();
			
			break;

		case "menu-notif" :
			console.log("menu-notif");
			break;

		case "menu-profile" :
			console.log("menu-profile");
			break;

	}
}

function closeMenu() {
	if(menuOpen != false) {
		// Close menu
		$('.menu-contents').slideUp();

		menuOpen = false;
	}
}