let creditCard = {
  name: 'John',
}

console.log(creditCard.propertyIsEnumerable('name')); // -> true
Object.defineProperty(creditCard, 'name', {
  enumerable: false
});

console.log('name' in creditCard); // => true
console.log(creditCard.propertyIsEnumerable('name')); // => false, Object.keys or Object.values won't show this attribute