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

// Let us seal the license object.
console.log(Object.isExtensible(license)); // => true
console.log(Object.isSealed(license)); // => false

Object.seal(license);
console.log(Object.isSealed(license), ' --- this should be true now');

license.friend = 'Kaela'; // this should fail silently if sealed so can't be extended for new properties
console.log(license.friend); // => undefined

delete license.name // should fail silently if sealed so existing properties cannot be removed
console.log(license.name) // => "Bijou" is returned by getter method

console.log(Object.getOwnPropertyDescriptor(license, 'name').configurable, ' ----- we should not be able to configure attributes anymore') // false - we cannot change the 'internal' properties like enumerable anymore
console.log(Object.getOwnPropertyDescriptor(license, 'number').writable, ' ---- I should not be able to use assignment operator to change number value anymore')l