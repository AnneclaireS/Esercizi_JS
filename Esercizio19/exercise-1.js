const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = Object.assign({},person1);
person1.firstName = "Simon";

//Attraverso l'utilizzo del metodo Object.assign viene in primo luogo replicata 
//la struttura esistente di person1, iterando le sue proprietà 
//e copiandole a livello primitivo nell'oggetto person2. Trattasi ora di due oggetti distinti,
//le proprietà aggiunte nell'oggetto person2 non influiranno con l'oggetto person1.


// Modifica la proprietà "firstName" di person2 in "Simon"

console.log(person1);
console.log(person2);