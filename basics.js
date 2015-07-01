// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( 15 );
// number - all integers and floating point numbers are of the number data type

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( "hello" );
// string - and object that is declared with single or double quotes around the context represents a string of text

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( [ "dog", "cat", "horse" ] );
// Object - this is an array of objects or a single data type

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( NaN );
// number - at the end of the day, NaN is actually a value for Number in Javascript

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"hamburger" + "s";
// 'hamburgers' - the + operator can be used for string concatentation

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"hamburgers" - "s";
// NaN - strings can only use the + operator (for concatentation); the interpreter will expect number parameters when a subtraction sign is used, so it will return NaN

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"johnny" + 5;
// "johnny5" - due to the first string "johnny", the + operator is interpreted for concatentation, and 5 undergoes a type conversion

// What is the return value of the below code sample? Provide a sentence or two of explanation.
99 * "luftbaloons";
// NaN - two numbers will be expected when the * operator is used, so NaN is returned when the string is found

// What will the contents of the below array be after the below code sample is executed.
var numbers = [ 2, 4, 6, 8 ];
numbers.pop();
numbers.push( 10 );
numbers.unshift( 3 );
// [ 3, 2, 4, 6, 10]

// What is the return value of the below code sample?
var morse = [ "dot", "pause", "dot" ];
var moreMorse = morse.join( " dash " );
moreMorse.split( " " );
// ['dot', 'dash', 'pause', 'dash', 'dot']

// What will the contents of the below array be after the below code sample is executed.
var bands = [];
var beatles = [ "Paul", "John", "George", "Pete" ];
var stones = [ "Brian", "Mick", "Keith", "Ronnie", "Charlie" ];
bands.push( beatles );
bands.unshift( stones );
bands[ bands.length - 1 ].pop();
bands[0].shift();
bands[1][3] = "Ringo";
// bands[[ "Mick", "Keith", "Ronnie", "Charlie" ], ["Paul", "John", "George", "Ringo"]]
