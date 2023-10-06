let creditCard = {};

// writable: you can assign new attributes to an object
// Object::defineProperty defaults a lot of the attributes like enumerable to false
Object.defineProperty(creditCard, 'name', {
  value: 'John',
  enumerable: true,
  configurable: true,
  writable: true
});

