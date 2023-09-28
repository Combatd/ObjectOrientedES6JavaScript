var student = {
  id: 1,
  name: 'Bob',
  display: function() {
    console.log(this.id); // this carries the object that you are eaccessing
    console.log(this.name);
  }
};

student.display();