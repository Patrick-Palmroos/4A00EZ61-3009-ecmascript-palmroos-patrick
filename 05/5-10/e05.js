function Person(name) {
  this.name = name;
}
Person.prototype.drinkBeer = function () {
  console.log(this.name + " drinks beer");
};

Person.prototype.sayHello = function () {
  console.log("hello from " + this.name);
};

let jack = new Person("jack");
jack.sayHello();
let tina = new Person("tina");
tina.sayHello();

console.log(Object.getPrototypeOf(jack) === Person.prototype);
console.log(Object.getPrototypeOf(tina) === Person.prototype);

tina.drinkBeer();
jack.drinkBeer();
