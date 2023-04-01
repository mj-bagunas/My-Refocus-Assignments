let obj = {
  num1: 100,
  num2: 50,
  sum: 150,
  difference: 50,
  product: 500,
  quotient: 20,
};

const lineBreak = "==============================";

function showData(obj) {
  console.log(lineBreak);
  console.log("First Number: ", obj.num1);
  console.log("Second Number: ", obj.num2);
  console.log("The sum is: ", obj.sum);
  console.log("The difference is: ", obj.difference);
  console.log("The product is: ", obj.product);
  console.log("The quotient is: ", obj.quotient);
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function newSetOfNumbers(num1, num2) {
  let obj = {
    num1: num1,
    num2: num2,
  };

  obj.sum = add(num1, num2);
  obj.difference = subtract(num1, num2);
  obj.product = multiply(num1, num2);
  obj.quotient = divide(num1, num2);

  return obj;
}

// Call showData function with obj as argument
showData(obj);

// Call newSetOfNumbers function with 200 and 10 as arguments
obj = newSetOfNumbers(200, 10);

// Call showData function with obj as argument
showData(obj);

// Call newSetOfNumbers function with 500 and 20 as arguments
obj = newSetOfNumbers(500, 20);

// Call showData function with obj as argument
showData(obj);
