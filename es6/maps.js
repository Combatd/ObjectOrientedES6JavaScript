let scores = new Map([
    ['maths', 90],
    ['physics', 95],
    ['chemistry', 80]
  ]);
// scores.set('maths', 90);
// scores.set('physics', 95);
// scores.set('chemistry', 80);

console.log(scores.get('maths'));
console.log(scores.get('physics'));
console.log(scores.get('chemistry'));

console.log(scores.size);

console.log(scores.has('maths')); // => true
console.log(scores.has('english')); // => false

scores.delete('maths');

console.log(scores.has('maths')); // => false
scores.clear();

console.log(scores.size); // => 0