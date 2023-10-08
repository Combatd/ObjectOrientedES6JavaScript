let passenger = {
  name: 'John'
};

console.log('name' in passenger); // true - exists on object
console.log(passenger.hasOwnProperty('name')); // true - specific to object
console.log('hasOwnProperty' in passenger); // true - it exists on the object
console.log(passenger.hasOwnProperty('hasOwnProperty')); // false - not unique to object class prototype

console.log(Object.prototype.hasOwnProperty('hasOwnProperty')); // true