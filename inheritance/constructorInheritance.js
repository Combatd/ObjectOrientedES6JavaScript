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
  this.name = name;
  this.type = type;
}

Surgeon.prototype = new Doctor(); // prototypal inheritance
Surgeon.prototype.constructor = Surgeon; // constructor method

Surgeon.prototype.toString = function() {
  return `[Surgeon ${this.name} type ${this.type}]`
}