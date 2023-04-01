// Create an algorithm that counts the number of times each element is repeated

const arr = [
  "Web Developer",
  "Refocus",
  "Web Developer",
  "Web Developer",
  "Refocus",
  "Awesome",
];

const counts = {};

arr.reduce((accumulate, current) => {
  if (current in accumulate) {
    accumulate[current]++;
  } else {
    accumulate[current] = 1;
  }
  return accumulate;
}, counts);

console.log(counts);
