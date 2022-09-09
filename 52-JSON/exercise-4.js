const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

// const json = JSON.stringify(person,
//   (key,value) => {
//     return typeof value === "number" ? value : undefined;
//   }
// );

// const json = JSON.stringify(person, (key, value) => {
//   if (typeof value === "string"){
//     return undefined;
//   }
//   return value;
// });

const json = JSON.stringify(person, ["id", "age"]);


console.log(json); // Should return: { id: 1, age: 25 }