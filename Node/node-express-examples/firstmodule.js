// Must remove the first line for second example
//module.exports = 'just a string' ;

var x = 5;
var addX = function(value) { 
   return value + x;
 };
 module.exports.x = x; 
 module.exports.addX = addX;