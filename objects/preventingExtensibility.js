let product = {
  name: 'Iphone'
};

console.log(Object.isExtensible(product));

Object.preventExtensions(product);
console.log(Object.isExtensible(product));

product.price = 700; // if not strict, this fails to be declared without an error message

console.log('price' in product); // => false