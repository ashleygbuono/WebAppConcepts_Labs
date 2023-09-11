const BankAccount = require("./bankaccountES6");

class SavingsAccount extends BankAccount  {
   constructor( acctID, acctHolder, balance, interest ) {
      super( acctID, acctHolder, balance ) ;
      this._interest = interest ;      
   }
   // Accessor for new property
   get   interest()         { return this._interest; }
   set   interest( newInt ) { this._interest = newInt; }
   // Override printValues, makeDeposit methods
   printValues( ) {
      super.printValues( ) ;
      console.log( "Interest Rate   " + this.interest ) ;
   }
   
   makeDeposit( depAmt ) {
      super.makeDeposit( depAmt * ( 1 + this.interest ) ) ; 
   }
     
}

module.exports = SavingsAccount;