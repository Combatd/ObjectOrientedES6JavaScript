let project1 = {
  name: 'Road Work',
  display: function() {
    console.log(this.name);
  }
};

// Object#hasOwnProperty prototypal inheritance
// console.log(project.hasOwnProperty('name')); // => true
// const prototype = Object.getPrototypeOf(project);

// console.log(prototype === Object.prototype); // => true

let expllicitCreatedObject = Object.create(Object.prototype, {
  name: {
    configurable: true,
    enumerable: true,
    value: 'Road Work',
    writable: true
  }
});

// inheritance
let project2 = Object.create(project1, {
  name: {
    configurable: true,
    enumerable: true,
    value: 'Bridge Work',
    writable: true
  }
});

project1.display();
project2.display(); // inherited method