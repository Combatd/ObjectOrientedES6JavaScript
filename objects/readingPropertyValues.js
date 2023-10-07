let creditCard = {
  name: 'John'
};

let descriptor = Object.getOwnPropertyDescriptor(creditCard, 'name');

console.log(descriptor.enumerable);
console.log(descriptor.configurable);
console.log(descriptor.writable);
console.log(descriptor.value);