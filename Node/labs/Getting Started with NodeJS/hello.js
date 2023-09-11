// // Hello.js
// // Modified to use myfirstmodule.js
// var moduleObject = require('./myfirstmodule.js') ;
// // Execute the fibonacci function
// console.log( moduleObject.fib( 16 ) )  ;
// // Do something with the names array
// moduleObject.names.forEach( function (name) { 
//                                   console.log(name  + " is " + name.length + " chars" ) 
//                             } ) ;


//console.log("Hello World");
const moduleObject = require("./myfirstmodule");

console.log(moduleObject.fib(16));

moduleObject.names.forEach((name) => console.log(name + " is " + name.length + " chars."));