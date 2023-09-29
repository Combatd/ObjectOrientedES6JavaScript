function displayDetails() {
  console.log(this.id);
  console.log(this.name);
}

var student1 = {
  id: 1,
  name: 'Bob',
  display: displayDetails
};

var student2 = {
  id: 2,
  name: 'John',
  display: displayDetails
};

// global scope
id = 3;
name = "Mary";


student1.display();
student2.display();
displayDetails();