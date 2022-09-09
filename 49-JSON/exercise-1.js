class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

const developer = new Person(1, 'Mario', 'Rossi', 25);
let json= JSON.stringify(developer)
console.log(json)
// // Print developer as json object

// let developer = JSON.parse(JSON.stringify(new Person(1, 'Mario', 'Rossi', 25)));
// console.log(developer)