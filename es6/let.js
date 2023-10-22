function varDemo() {
  var i = 10;
  // var i is available for entire scope, so the for loop resets the value assigned at the top
  for (var i = 0; i <= 20; i++) {
    console.log(i);
  }
  console.log(i); // 21
}

function letDemo() {
  var i = 10;
  // let gives local block scope
  for (let i = 0; i <= 20; i++) {
    var x = 10;
    console.log(i);
  }
  console.log(x); // hoisted at the top from var keyword
  console.log(i); // 10
}

varDemo();
letDemo();