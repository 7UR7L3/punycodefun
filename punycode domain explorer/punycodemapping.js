// turns out i had node on my computer

const pc = require( "punycode" ); // thanks https://github.com/bestiejs/punycode.js/
const fs = require( "fs" ); // thanks https://stackoverflow.com/a/2497040 (for what follows as well)

// thanks https://github.com/catcher-in-the-try/contains-chinese/blob/master/index.js lmfao (didn't want to figure out npm)
const HAN_REGEX = /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DB5\u4E00-\u9FD5\uF900-\uFA6D\uFA70-\uFAD9]/;
function containsChinese(text) {
  if (text === null || text === undefined || text === '') { return false; }
  if (typeof text !== 'string') text = text.toString();
  return !!text.match(HAN_REGEX);
}


// --- ^ not mine, v mine


var vocab = "abcdefghijklmnopqrstuvwxyz0123456789~".split( "" );
// var vocab = "abcdefghijklmnopqrstuvwxyz~".split( "" );

function step( toenc ) // increments the "number" formed with the characters of vocab
{
	if( toenc == [] ) return [ vocab[ 0 ] ];

	var last = toenc.pop(), next;
	
	if( (next=vocab[ vocab.indexOf( last ) + 1 ]) == "~" ) // must wrap last's previous
	{ toenc = step( toenc ); toenc.push( vocab[ 0 ] ); }
	else toenc.push( next );

	return toenc;
}


// --- v mine that actually does things


var out = "";


for( s = "aa".split( "" ); s.join( "" ) !== "aaaaa"; s = step( s ) )
	try
	{
		var map = s.join( "" ) + "\t" + pc.decode( s.join( "" ) ) + "\n";
		/*if( !containsChinese( map ) )*/ out += map;
	}
	catch( e ){}


fs.writeFile( "punycodemappingout.txt", out, function( err ) {
    if( err ) return console.log( err );
    console.log( "Output punycodemappingout.txt ." );
} );



// for unicode				https://unicode-table.com/en/
// for punycode conversion	https://www.punycoder.com/
// for .to registration		https://register.to/cart.php?a=add&domain=register&query=xn--12h	maybe sketchy.. see https://www.tonic.to/