function Flight() {

}

let flight1 = new Flight();
let flight2 = new Flight(); 

console.log(flight1 instanceof Flight);
console.log(flight2 instanceof Flight);

console.log(flight1.constructor === Flight);