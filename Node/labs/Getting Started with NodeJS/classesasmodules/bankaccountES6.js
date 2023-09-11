// Coded as a Module to use with NodeJS
class BankAccount {
      
      constructor(acctID, acctHolder, balance ) {
         this._acctID    = acctID ;
         this._acctHolder= acctHolder ;
         this._balance   = balance ;
      }
      // Accessors....
      set acctID( acctID )          { this._acctID = acctID  ;  }
      get acctID( )                 { return this._acctID ;     }
      set acctHolder( acctHolder )  { this._acctHolder= acctHolder ;  }
      get acctHolder( )             { return this._acctHolder ;     }  
      set balance( balance )        { this._balance   = balance ;  }
      get balance( )                { return this._balance ;     }    
      // printValues..
      printValues( ) {
         console.log( "Acct ID     = " + this.acctID ) ;
         console.log( "Acct Holder = " + this.acctHolder ) ;
         console.log( "Balance     = " + this.balance ) ;
      }
      // makeDeposit
      makeDeposit( depAmt ) { 
         if ( depAmt > 0 ) {
            this.balance = this.balance + depAmt ;
            alert("Deposit of " + depAmt + " made to account " + this.acctID ) ;
         }
         else alert("Deposit Amount " + depAmt + " must exceed 0" ) ;
      }
      // makeWithdrawal
      makeWithdrawal( withAmt ) { 
         if ( withAmt > 0 && this.balance - withAmt > 0 ) {
            this.balance = ( this.balance - withAmt ) ;
            alert("Withdrawal of " + withAmt + " made to account " + this.acctID ) ;            
         }
         else 
         if ( withAmt <= 0 ) alert("Withdrawal Amount " + withAmt + " must exceed 0" ) ;
         else alert("Withdrawal Amount " + withAmt + " must NOT exceed balance of " + this.balance ) ;
      } ;
   } 
module.exports =  BankAccount ;

  
