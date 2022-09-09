const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) =>  {
    let person = persons.find(persona => persona.id === id);
    if (person) {
      resolve (person);
    } 
    else {
      reject ('Elemento non trovato');
    }
  });
}

fetchPersonById(2).then((person) => {
  console.log(person);
});

