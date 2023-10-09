function Flight(airlines, flightNumber) {
  this.airlines = airlines;
  this.flightNumber = flightNumber;
}

// All flight objects will share the memory space to access this method
// Flight.prototype.display = function() {
//   console.log(this.airlines);
//   console.log(this.flightNumber);
// }

Flight.prototype = {
  display:  function() {
      console.log(this.airlines);
      console.log(this.flightNumber);
    },

  toString: function() {
    return "[Flight " + this.airlines + ", " + this.flightNumber + "]";
  }
}


let flight1 = new Flight('American Airlines', 'AA123');
let flight2 = new Flight('South West', 'SW456'); 

flight1.display();
flight2.display();

console.log(flight1.toString());
console.log(flight2.toString());