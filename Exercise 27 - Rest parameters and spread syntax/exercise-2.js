const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};


const {id, ...rest} = person
const personInfo = {
  firstName: person.firstName,
  lastName: person.lastName,
  age: person.age
};

console.log(id, personInfo);
console.log(id, rest);