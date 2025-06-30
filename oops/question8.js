//  Implement a Shape class and extend it with Circle and Rectangle. Add area calculation methods.
class Shape {
  constructor(length, width, radius) {
    this.length = length;
    this.width = width;
    this.radius = radius;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super(null, null, radius);
  }
  area() {
    return 3.14 * this.radius * this.radius;
  }
}
class Rectangle extends Shape {
  constructor(length, width) {
    super(length, width);
  }
  area() {
    return this.length * this.width;
  }
}

const circle = new Circle(34);
const rectangle = new Rectangle(34, 45);
console.log(circle.area());
console.log(rectangle.area());
