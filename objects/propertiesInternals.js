let course1 = {
  name: "JavaScript fundamentals" // [[Put]]
}

let course2 = new Object();
course2.name = 'ReactJS'; //[[Put]]

course1.name = 'End to End Java Project'; // [[Set]] Setting a value on an existing object

course1.description = 'Master Java Project Development'; // [[Put]] New property added to the object

console.log('name' in course1); // true
console.log('description' in course2); // false

console.log('toString' in course1); // true, Object instances always have toString method
console.log(course1.hasOwnProperty('toString')); // false, for specific attribute

delete course1.description; // return true if attribute is deleted
console.log('description' in course1, ' description is not on course1'); // fa;se