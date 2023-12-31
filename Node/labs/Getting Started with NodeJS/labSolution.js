// For use in NodeJS
var BankAccount     = require('./classesasmodules/bankaccountES6.js' ) ;
var CheckingAccount = require('./classesasmodules/checkingES6.js' ) ;
var SavingsAccount  = require('./classesasmodules/savingsES6.js' ) ;
// 
   var bunchaAccts = [] ;
   function createBunchaAccounts( numAccts ) {
      // Gen a random number from 0 to 2.    
      // 0 ==> Bank Account               properties:   'B' + acctIDX, 'BName' + acctIDX, acctIDX * 100
      // 1 ==> Checking                   properties:   'C' + acctIDX, 'CName' + acctIDX, acctIDX * 100, true
      // 2 ==> Savings                    properties:   'S' + acctIDX, 'SName' + acctIDX, acctIDX * 100, 0.05
      // acctID, acctHolder, balance
      // Most property values don't really matter
      for ( var acctIDX = 0; acctIDX < numAccts; acctIDX++ ) {
         switch( Math.floor(Math.random() * 3) ) {
            case 0: bunchaAccts[ acctIDX ] = new BankAccount( 'B' + acctIDX, 'BName' + acctIDX, acctIDX * 100 ) ; break ;
            case 1: bunchaAccts[ acctIDX ] = new CheckingAccount( 'C' + acctIDX, 'CName' + acctIDX, acctIDX * 100, true ) ; break ;
            default: bunchaAccts[ acctIDX ] = new SavingsAccount( 'S' + acctIDX, 'SName' + acctIDX, acctIDX * 100, 0.05 ) ;            
         }
      }
         
   }
   // Create a bunch of accounts
   createBunchaAccounts( 100 ) ;
   // Just print out the account IDs: POLYMORPHISM!!!!!
   for ( objIDX = 0; objIDX < bunchaAccts.length; objIDX++ )
      console.log( bunchaAccts[ objIDX ].acctID ) ;
   // Count the number of Savings accounts
   // We'll use the acctID for this (S ==> Savings, etc.)
   // In your filter extract the Account ID with the accessor and see if it begins with 'S'
   var numSavings = bunchaAccts.filter( function( elem ) { return elem.acctID.startsWith('S'); } ).length ;  
   console.log( numSavings ) ;
   

   // Find the average bank balance of ALL accounts
   // first, use reduce to total ALL balances then divide by the number of accounts
   var totalBalance = bunchaAccts.reduce( function ( total, acctElem ) { return total += acctElem.balance; }, 0 ) ;   
   console.log("average balance = " + (totalBalance / bunchaAccts.length ) ) ;   
   // For all savings account with balance > 5,000 apply the interest rate (newbalance = oldbalance * ( 1 + interestRate )
   // Filter savings accounts for balances > 5,000 then map the product of the balance and the interest back to the balance
   // Feel free to use the filter you already coded to count the savings accounts.
   // Print out acct ID and new balances using the forEach() method.
   //
   // If you're bad to the bone, you can do this ON ONE LINE!!! (Maybe not a good idea???)
   var newSavAccts = bunchaAccts.filter( function( elem ) { return elem.acctID.startsWith('S') && elem.balance > 5000 ; } )
                                .map( function( elem ) {  
                                          elem.balance = elem.balance * ( 1 + elem.interest )  ; 
                                          return elem; } 
                                    )
                                .forEach( function ( sAcct ) { console.log( sAcct.acctID + "   " + sAcct.balance ) } ) ; 
   /////////////////////////////////////////////////////////////////////////////
   // OPTIONAL
   // Now, count the number of EACH type
   // You'll have an object with the key of B, S, or C and the counts for each value                                     
   var numEachType = bunchaAccts.reduce( function( accountTypeCounts, anAccount ) { 
                                          var firstChar = anAccount.acctID.charAt(0) ;
                                          accountTypeCounts[ firstChar ] = ( accountTypeCounts[ firstChar ] || 0 ) + 1 ;
                                          return accountTypeCounts; 
                                             } 
                                        ) ;
   // Print them out                                 
   console.log( "Sav " + numEachType[ 'S' ] ) ;   
   console.log( "Bank " + numEachType[ 'B' ] ) ;
   console.log( "check " + numEachType[ 'C' ] ) ;                                  
                                
