function calculateBMI(weight, height) {
  // Convert height from cm to meters
  height = height / 100;

  // Calculate BMI using the formula
  let bmi = weight / (height * height);

  // Round off BMI to 2 decimal places
  bmi = Math.round(bmi * 100) / 100;

  return bmi;
}

let weight = 55; // kg
let height = 165; // cm
let bmi = calculateBMI(weight, height);

console.log(`Your BMI is: ${bmi}`);
