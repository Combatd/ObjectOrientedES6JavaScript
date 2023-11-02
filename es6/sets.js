let courses = new Set(['Angular', 'Node', 'Java']);
// let courses = new Set().add('Angular').add('Node').add('Java');
// courses.add('Angular');
// courses.add('Node');
// courses.add('Java');

console.log(courses.size);
console.log(courses.has('Angular')); // => true
console.log(courses.has('React')); // => false

for (let entry of courses) {
  console.log(entry);
}

courses.clear();
console.log(courses.size);