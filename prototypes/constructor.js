function Flight(airlines, flightNumber) {
  this.airlines = airlines;
  this.flightNumber = flightNumber;

  this.display = function() {
    console.log(this.airlines);
    console.log(this.flightNumber);
  };
}

let flight1 = new Flight('American Airlines', 'AA123');
let flight2 = new Flight('South West', 'SW456'); 

flight1.display();
flight2.display();

console.log(flight1 instanceof Flight);
console.log(flight2 instanceof Flight);

console.log(flight1.constructor === Flight);