// From base 'Object class'
let car = Object.create(Object.prototype, {
  model: {
    value: 'Toyota'
  },
  year: {
    value: 2010
  },
  drive: {
    value: function() {
      return 'Lets go!';
    }
  }
});

let honda = Object.create(car, {
  model: {
    value: 'Honda'
  },
  year: {
    value: 2015
  },
});


let bmw = Object.create(car, {
  model: {
    value: 'BMW'
  },
  year: {
    value: 2016
  },
});

// inherited method
console.log(car.drive())
console.log(honda.drive())
console.log(bmw.drive())

// #toString inherited from base Object prototype
console.log(car.model.toString())
console.log(honda.model.toString())
console.log(bmw.model.toString())

// model, year attributes from parent car prototype
console.log(car.year.toString())
console.log(honda.year.toString())
console.log(bmw.year.toString())