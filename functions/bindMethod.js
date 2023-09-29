function displayDetails(testscore, testscore2) {
  console.log(this.id);
  console.log(this.name);
  console.log(testscore);
  console.log(testscore2);
}

var student1 = {
  id: 1,
  name: 'Bob',
};

var student2 = {
  id: 2,
  name: 'John',
};

// global scope
var id = 3;
var name = "Mary";

var displayForStudent1 = displayDetails.bind(student1);
displayForStudent1(10);
var displayForStudent2 = displayDetails.bind(student2, 20);
displayForStudent2();

// Even if you assign the binded method to another object, it is still bound to the object that it is initially bound to
displayForStudent2.displayDetails = displayForStudent1;
displayForStudent2,displayDetails(40);