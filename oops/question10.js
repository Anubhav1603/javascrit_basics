// Design a class hierarchy to represent animals in a zoo.
// You need a base class Animal with a method makeSound().
// Then, create three classes: Lion, Elephant, and Monkey that extend Animal and override the makeSound() method to return their respective sounds.

class Animal {
  makeSound() {
    console.log("making Sound");
  }
}

class Lion extends Animal {
  makeSound() {
    console.log("Roar");
  }
}
class Monkey extends Animal {
  makeSound() {
    console.log("EEEE");
  }
}
class Elephant extends Animal {
  makeSound() {
    console.log("Uuuuuuuuuuu");
  }
}

const lion = new Lion();
const monkey = new Monkey();
const elephant = new Elephant();

lion.makeSound();
monkey.makeSound();
elephant.makeSound();
