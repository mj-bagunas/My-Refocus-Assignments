let birth_month = 7;
const birth_year = 1995;
const current_month = new Date().getMonth();
let current_year = new Date().getFullYear() - 1;
age = current_year -= birth_year;

if (birth_month <= current_month) {
  age++;
}
console.log(`Patients Accurate Age: ${age}`);
