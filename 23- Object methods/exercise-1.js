const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

let key = (Object.keys(person));

for(let i=0; i<key.length; i++){
  console.log(`${key[i]}: ${person[key[i]]}`);
}
// Print values of person using Object.keys