class Dog {
  constructor(name) {
    this.name = name;
  }
  sniffButt() {
    console.log(this.name + " sniffs butt");
  }
}

let spot = new Dog("spot");
let vilma = new Dog("vilma");
spot.sniffButt();
vilma.sniffButt();
