function Doctor() {

}

// constructor functions will instantiate objects with these atttributes
Doctor.prototype = Object.create(Object.prototype, {
  constructor: {
    configurable: true,
    enumerable: true,
    value: Doctor,
    writable: true
  }
});