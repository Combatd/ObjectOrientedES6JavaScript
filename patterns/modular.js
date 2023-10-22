// anonymous function that immediately returns a value into a variable
var account = (function() {
  // hidden encapsulated data, private scope
  var balance = 1000;

  // still inside the scope of the function, IFFE
  return {
    name: 'John',
    getBalance: function() {
      return balance;
    },
    addInterest: function(interest) {
      balance += interest;
    }
  }
}());

console.log(account.name);
console.log(account.getBalance()); // => 1000
account.balance = 2000; // does not work
console.log(account.getBalance()); // => 1000
account.addInterest(300);
console.log(account.getBalance()); // => 1300