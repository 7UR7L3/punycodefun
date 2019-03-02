window.history.replaceState( {}, "", "/--◮.tk" + (h=window.location.href).substring(h.indexOf("xn--12h.tk")+10) );
document.title = "◮.tk";

/*\

visit
	◮.tk/neat/shit

displays as
	xn--12h.tk/neat/shit

this script makes it display as
	xn--12h.tk/--◮.tk/neat/shit

use absolute url as i.e. `"http://◮.tk//--◮.tk" + (h=`... for //
	xn--12h.tk//--◮.tk/neat/shit

other issues
	copying from url copies punycode and url percent encoding so it gets ugly regardless unless you only copy the pretty part which does work
		solution: include copy url button on every page with accessable shortkut to grab it with the keyboard, then don't have to modify url
	no check if already prettified idn url
		solution: include check if you need it
	no idea if navigation works properly
		solution: test, also could just put all content in "--◮.tk" folder

\*/


// off topic but i just realized you can make block comments loook like that lmao