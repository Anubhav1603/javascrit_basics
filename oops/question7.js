// Create a singleton class in JavaScript – only one instance should be allowed.

class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
    return this;
  }
}
const a = new Singleton();
const b = new Singleton();
console.log(a == b);
