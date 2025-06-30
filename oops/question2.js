// Implement inheritance: create a Student class that extends Person and adds a grade property.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getname = () => this.name;
  getage = () => this.age;
  greeting = () => `Hello, ${this.name}!`;
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
  getgrade = () => this.grade;
}

const student = new Student("Anubhav Sinha", 23, "A+");
console.log(student.getname());
console.log(student.getage());
console.log(student.greeting());
console.log(student.getgrade());
