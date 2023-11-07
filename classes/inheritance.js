class BMW {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

class ThreeSeries extends BMW {
  constructor(make, model, year, cruiseControlEnabled) {
    super(make, model, year);
    this.cruiseControlEnabled = cruiseControlEnabled;
  }
}

class FiveSeries extends BMW {
  constructor(make, model, year, parkingAssistEnabled) {
    super(make, model, year);
    this.parkingAssistEnabled = parkingAssistEnabled;
  }
}

let threeSeries = new ThreeSeries('BMW', '328', 2018, true);
let fiveSeries = new FiveSeries('BMW', '328', 2018, true);

console.log(threeSeries.make);
console.log(threeSeries.model);
console.log(threeSeries.year);
console.log(threeSeries.cruiseControlEnabled);

console.log(fiveSeries.make);
console.log(fiveSeries.model);
console.log(fiveSeries.year);
console.log(fiveSeries.parkingAssistEnabled);