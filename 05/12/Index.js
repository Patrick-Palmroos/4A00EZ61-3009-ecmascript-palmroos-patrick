class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  static max = function (arr) {
    let largest = 0;
    arr.map((x) => {
      if (x instanceof Circle) {
        if (x.radius >= largest) {
          largest = x.radius;
        }
      } else {
        throw new Error(`${x} not instance of Circle`);
      }
    });

    return largest;
  };

  set radius(newRadius) {
    if (newRadius > 0) {
      this._radius = newRadius;
    } else {
      throw new Error("radius must be above 0");
    }
  }

  get radius() {
    return this._radius;
  }
}

let c = new Circle(50); // sets radius
c.radius = 30; // changes radius, uses setter
console.log(c.radius); // returns radius, uses getter
//c.radius = -70; // crashes app, radius must be > 0
let a = new Circle(160);
let b = new Circle(70);
let d = new Circle(80);

let x = Circle.max([a, b, c, d]);
console.log(x);
