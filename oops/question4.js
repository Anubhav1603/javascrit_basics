// Use a static method to count how many objects of a class have been created.

class Test {
  constructor() {
    Test.objectcount++;
  }
  static get_objectcount() {
    return Test.objectcount;
  }
}

Test.objectcount = 0;

const test = new Test();
const test1 = new Test();
const test2 = new Test();

console.log(`number of objects has been created ${Test.get_objectcount()}`);
