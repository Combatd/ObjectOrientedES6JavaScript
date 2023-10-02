const productOfTwo = function(num1, num2) {
  return num1 * num2;
}

console.log(twoProduct(3, 4)); // if hoisted, this should return 12
console.log(productOfTwo(2, 5));

function twoProduct(num1, num2) {
  return num1 * num2;
}
// hoisting only occurs with function declaration syntax, not expression syntax