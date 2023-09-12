function Person(name, age) {
  this.name = name;
  this.age = age;
}

//tina object
let tina = new Person("tina", 24);

//iterate through tina objects properties
for (let key in tina) {
  console.log(tina[key]);
}
