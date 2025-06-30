// Create a Person class with name and age properties. Add a method to display a greeting.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getname = () => this.name;
  getage = () => this.age;
  greeting = () => `Hello, ${this.name}!`;
}

const person = new Person("Anubhav Sinha", 23);
console.log(person.getname());
console.log(person.getage());
console.log(person.greeting());
