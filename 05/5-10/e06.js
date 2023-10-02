/*class Person {
  constructor(name) {
    this.name = name;
  }
  drinkBeer() {
    console.log(this.name + " drinks beer");
  }
  sayHello() {
    console.log("hello from " + this.name);
  }
}
*/ // In this one drink beer is only once in memory

class Person {
  constructor(name) {
    this.name = name;
    this.drinkBeer = function () {
      console.log(this.name + " drinks beer");
    };
  }
  sayHello() {
    console.log("hello from " + this.name);
  }
} // In this one drink is twice in memory

let jack = new Person("jack");
jack.sayHello();
let tina = new Person("tina");
tina.sayHello();
