let license = {};

Object.defineProperties(license, {
  name: {
    value: 'Bijou',
    enumerable: false,
    configurable: true,
    writable: true,
  },
  number: {
    value: 1,
    configurable: false
  }
})

console.log(license.propertyIsEnumerable('name')); // => false
license.number = 2;
console.log(license.number); // => 1 is returned by getter method