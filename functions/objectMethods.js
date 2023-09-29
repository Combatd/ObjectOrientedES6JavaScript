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
id = 3;
name = "Mary";

// call will invoke with a parameter becoming the context, or 'this'
// displayDetails.call(student1, 10);

// displayDetails.call(student2, 20);

// displayDetails.call(global, 30);

// student1.display();
// student2.display();
// displayDetails();

// apply() is similar to call but takes an entire array as a parameter
displayDetails.apply(student1, [10, 20, 30]);
displayDetails.apply(student2, [20, 30]);
displayDetails.apply(global, [30, 15]);