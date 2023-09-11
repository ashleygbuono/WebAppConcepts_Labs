// myfirstmodule.js
// Just a Node module to show how its done
module.exports.fib = 
   function fibonacci(n) {
      return n < 1 ? 0
           : n <= 2 ? 1
           : fibonacci(n - 1) + fibonacci(n - 2);
   }
module.exports.names = ["Lou", "Jake", "Mary", "Cuthberth", "Melissa" ] ;

// This will be PRIVATE to the module
function reverseNames( ) {
   return names.reverse( ) ;
}