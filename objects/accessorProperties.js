// accessor and mutator methods

// getter and setter methods
let creditCard = {
  _name: 'John',

  get name() {
    return this._name;
  },

  set name(value) {
    this._name = value;
  }
}

console.log(creditCard.name);
creditCard.name = 'Bob';
console.log(creditCard.name);

// getters and setters only need to be defined if there are special things happening like calculations / logic