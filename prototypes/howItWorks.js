let myObj = {};

let prototype = Object.getPrototypeOf(myObj);

// 1. Checks if the property exists on the function
// 2. If it does exist it accesses it
// 3. If it doesn't exist, it goes to the prototype
console.log(myObj.toString());

myObj.toString = function() {
  return 'My toString Method'
}

console.log(myObj.toString());

delete myObj.toString;
console.log(myObj.toString());

delete myObj.toString; // it cannot delete the Object.prototype.toString
console.log(myObj.toString());