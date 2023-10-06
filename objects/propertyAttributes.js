let creditCard = {
  name: 'John',
}

console.log(creditCard.propertyIsEnumerable('name')); // -> true
Object.defineProperty(creditCard, 'name', {
  enumerable: false
});

console.log('name' in creditCard); // => true
console.log(creditCard.propertyIsEnumerable('name')); // => false, Object.keys or Object.values won't show this attribute

// configurable determines if attribute can be modified in the future
Object.defineProperty(creditCard, 'name', {
  configurable: false
});

delete creditCard.name; // => doesn't work, doesn't throw error unless in strict mode
console.log('name' in creditCard); // => true
console.log(creditCard.name); // -> undefined

// cannot redefine configurable after setting it to false
Object.defineProperty(creditCard, 'name', {
  configurable: true
});
