const BankAccount = require("./bankaccountES6");

class CheckingAccount extends BankAccount {
      constructor ( acctID, acctHolder, balance, odProtection ) {
            super( acctID, acctHolder, balance ) ;
            this._odProtection = odProtection ;
      }
      // Accessor for new property
      get odProtection( )     { return this._odProtection; } 
      set odprotection( odp ) { this._odProtection = odp; }
      // Override of printValues()
      printValues( ) {
         super.printValues( ) ;
         console.log( "OD Protection?   " + this.odProtection ) ;
      }
      // Override of makeWithdrawal
      makeWithdrawal( withAmt ) {
         if ( !this.odProtection || withAmt < this.balance ) 
            super.makeWithdrawal( this, withAmt ) ;
         else 
         if ( withAmt <= 0 ) alert("Withdrawal Amount " + withAmt + " must exceed 0" ) ;
         else this.balance = this.balance - withAmt  ; 
      }
}

module.exports = CheckingAccount;