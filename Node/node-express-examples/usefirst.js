/* Comment this code for second example

const simple = require( './firstmodule.js' ) ; 
console.log( simple ) ;
*/
const simple = require("./firstmodule.js");

// Comment this code for first example
console.log( simple.x ) ;

console.log('Using function in module : ' +  simple.addX( 200 ) ) ;