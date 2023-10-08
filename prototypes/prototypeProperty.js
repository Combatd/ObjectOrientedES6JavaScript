let myObj = {};

let prototype = Object.getPrototypeOf(myObj);

console.log(prototype === Object.prototype); // true - matches the Object constructor

console.log(Object.prototype.isPrototypeOf(myObj)); // true - generic object inherits from Object class