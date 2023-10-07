let creditCard = {
  _name: 'John'
};

Object.defineProperty(creditCard, 'name', {
  get: function() {
    return this._name;
  },
  set: function(value) {
    this._name = value;
  },
  enumerable: true,
  configurable: true
});