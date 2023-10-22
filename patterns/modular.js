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

// revealing module pattern
var account2 = (function() {
  // hidden encapsulated data, private scope
  var balance = 1000;

  function getBalance() {
    return balance;
  }

  function addInterest(interest) {
    balance += interest;
  }

  return {
    name: 'Matt',
    getBalance: getBalance,
    addInterest, addInterest
  }
}());

console.log(account2.name);
console.log(account2.getBalance()); // => 1000
account2.balance = 2000; // does not work
console.log(account2.getBalance()); // => 1000
account2.addInterest(300);
console.log(account2.getBalance()); // => 1300