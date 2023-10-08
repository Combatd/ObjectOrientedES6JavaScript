let product = {
  name: 'Iphone'
};

console.log(Object.isExtensible(product)); // => true
console.log(Object.isSealed(product)); // => false

Object.seal(product); // All properties will be non-configurable

console.log(Object.isExtensible(product)); // => false
console.log(Object.isSealed(product)); // => true

product.price = 10; // fails without error if not strict

console.log('price' in product); // => false

delete product.name; // fails without error if not strict
console.log('name' in product); // => true

let descriptor = Object.getOwnPropertyDescriptor(product, 'name');
console.log(descriptor.configurable); // => false