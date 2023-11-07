class Passenger {

  constructor(firstName, lastName, frequentFlyerNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.frequentFlyerNumber = frequentFlyerNumber;
  }
}

let passenger = new Passenger('Mark', 'Sobeki', 1234);

let passenger2 = new Passenger('John', 'Bailey', 200);

console.log(passenger);
console.log(passenger2);