function Laptop(manufacturer, memory, capacity) {
  // assign instance property values from the arguments
  this.manufacturer = manufacturer;
  this.memory = memory;
  this.capacity = capacity;

  this.display = function() {
    console.log(this.manufacturer);
    console.log(this.memory);
    console.log(this.capacity);
  }
}

let laptop1 = new Laptop('ibuypower', 16, 1000);
let laptop2 = new Laptop('nzxt', 32, 2000);

laptop1.display();
laptop2.display();