function sum(...values) {
  let total = values.reduce((a, b) => a + b);
  return total
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));