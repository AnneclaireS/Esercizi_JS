const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};



for ([chiave, valore] of Object.entries(person)) {
  console.log(`${chiave}: ${valore}`);
}