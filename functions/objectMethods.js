function displayDetails() {
  console.log(this.id);
  console.log(this.name);
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
displayDetails.call(student1);

displayDetails.call(student2);

displayDetails.call();

// student1.display();
// student2.display();
// displayDetails();