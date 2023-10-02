let course1 = {
  name: "JavaScript fundamentals" // [[Put]]
}

let course2 = new Object();
course2.name = 'ReactJS'; //[[Put]]

course1.name = 'End to End Java Project'; // [[Set]] Setting a value on an existing object

course1.description = 'Master Java Project Development'; // [[Put]] New property added to the object

console.log('name' in course1); // true
console.log('description' in course2); // false