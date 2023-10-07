let creditCard = {
  _name: 'John'
};

Object.defineProperties(creditCard, {
  _name: {
    value: 'John',
    enumerable: true,
    configurable: true,
    writable: true,
  },
  _name: {
    get: function() {
      return this._name;
    },
    set: function(value) {
      this._name = value;
    },
    enumerable: true,
    configurable: true
  }
})