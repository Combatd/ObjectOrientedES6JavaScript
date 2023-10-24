const student = {
  firstName: 'John',
  lastName: 'Bailey',
  score: 90,
};

// const fName = student.firstName;
// const lName = student.lastName
// const s = student.score

const {firstName: fName, lastName: lName, score: s} = student;

console.log(fName);
console.log(lName);
console.log(s);

const {firstName, lastName, score} = student;
console.log(firstName);
console.log(lastName);
console.log(score);