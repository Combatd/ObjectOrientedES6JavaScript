function Flight(airlines, flightNumber) {
  this.airlines = airlines;
  this.flightNumber = flightNumber;
}

// All flight objects will share the memory space to access this method
Flight.prototype.display = function() {
  console.log(this.airlines);
  console.log(this.flightNumber);
}

let flight1 = new Flight('American Airlines', 'AA123');
let flight2 = new Flight('South West', 'SW456'); 

flight1.display();
flight2.display();