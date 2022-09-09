const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

let {id, ...rest} = person;

// const id = person.id;
// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;


console.log(id, rest.firstName, rest.lastName, rest.age);