// Demonstrate method overriding by creating a base Animal class and overriding speak() in a Dog class.

class Animal {
  speak() {
    console.log("Animal Speaking");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Bark");
  }
}

const animal = new Animal();
const dog = new Dog();
animal.speak();
dog.speak();
