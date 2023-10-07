let creditCard = {
  _name: 'John'
};

Object.defineProperty(creditCard, 'name', {
  get: function() {
    return this._name;
  },
});

console.log('name' in creditCard);
console.log(creditCard.propertyIsEnumerable('name'));

delete creditCard.name;

console.log('name' in creditCard); // cannot delete without configurable: true

creditCard.name = 'Bob'; // cannot set without setter method

console.log(creditCard.name);