let product = {
  name: 'Iphone'
};

console.log(Object.isExtensible(product)); // => true
console.log(Object.isSealed(product)); // => false
console.log(Object.isFrozen(product)); // => false

Object.freeze(product); // All properties will be non-configurable

console.log(Object.isExtensible(product), ' ---- we froze it'); // => false
console.log(Object.isSealed(product)); // => true

product.price = 'Mac Book Pro'; // fails silently if not strict
console.log(product.name) // still Iphone

let descriptor = Object.getOwnPropertyDescriptor(product, 'name');
console.log(descriptor.configurable); // => false
console.log(descriptor.writable); // => false