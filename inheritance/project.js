let project = {
  name: 'Road Work'
};

// Object#hasOwnProperty prototypal inheritance
console.log(project.hasOwnProperty('name')); // => true
const prototype = Object.getPrototypeOf(project);

console.log(prototype === Object.prototype); // => true