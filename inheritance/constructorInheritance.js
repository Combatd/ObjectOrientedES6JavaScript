function Doctor(name) {
  this.name = name;
}

Doctor.prototype.treat = function() {
  return 'treated';
}

Doctor.prototype.toString = function() {
  return `[Doctor ${this.name}]`;
}

function Surgeon(name, type) {
  Doctor.call(this, name); // invoke the parent's constructor
  this.name = name;
  this.type = type;
}

Surgeon.prototype = new Doctor(); // prototypal inheritance
Surgeon.prototype.constructor = Surgeon; // constructor method

Surgeon.prototype.toString = function() {
  return `[Surgeon ${this.name} type ${this.type}]`
}

let doctor = new Doctor('John');
let surgeon = new Surgeon('Bob', 'Dental');

console.log(doctor.treat());
console.log(surgeon.treat()); // inherited instance method

console.log(doctor.toString());
console.log(surgeon.toString()); // inherited instance method

console.log(doctor instanceof Doctor); // => true
console.log(doctor instanceof Object); // => true
console.log(surgeon instanceof Doctor); // =. true
console.log(surgeon instanceof Surgeon); // =. true
console.log(surgeon instanceof Object); // =. true