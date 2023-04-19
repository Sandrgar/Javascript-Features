class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

const stringDev = new Person(1, 'Mario', 'Rossi', 25);
let json_stringDev = JSON.stringify(stringDev);
console.log(json_stringDev)