function Car() {
  this.model = 'Toyota';
  this.year = 2010;
}

Car.prototype.drive = function() {
  return 'lets go!';
}

Car.prototype.toString = function() {
  return `Model: ${this.model} | Year: ${this.year}`;
}

Car.prototype.constructor = Car;

function Honda()  {
  this.model = 'Honda';
  this.year = 2016;
}

Honda.prototype = new Car();
Honda.prototype.constructor = Honda; // the Honda function we defined above

function BMW()  {
  this.model = 'BMW';
  this.year = 2018;
}

BMW.prototype = new Car();
Honda.prototype.constructor = BMW; // the BMW function we defined above

let car = new Car();
let honda = new Honda();
let bmw = new BMW();


// These methods inherited from the parent should work
console.log(car.drive());
console.log(honda.drive());
console.log(bmw.drive());

console.log(car.toString())
console.log(honda.toString())
console.log(bmw.toString())