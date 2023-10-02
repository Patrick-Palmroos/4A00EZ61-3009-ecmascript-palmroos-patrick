function Mammal(name) {
  this.name = name;
}

Mammal.prototype.giveBirth = function () {
  console.log(this.name + " gives birth");
};

function Dog(name, breed) {
  Mammal.call(this, name);
  this.breed = breed;
}
Dog.prototype.bark = function () {
  console.log(this.name + " barks");
};
Object.setPrototypeOf(Dog.prototype, Mammal.prototype);

function Cat(name, breed) {
  Mammal.call(this, name);
  this.breed = breed;
}
Cat.prototype.meow = function () {
  console.log(this.name + " meow");
};
Object.setPrototypeOf(Cat.prototype, Mammal.prototype);

let koira = new Dog("musti", "labradori");
let kisu = new Cat("täplä", "oranssi");

koira.bark();
kisu.meow();
koira.giveBirth();
kisu.giveBirth();
