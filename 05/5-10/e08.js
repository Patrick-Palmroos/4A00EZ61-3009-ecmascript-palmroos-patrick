/*function Dog(name) {
  this.name = name;

  this.sniffButt = function () {
    console.log("hello world");
  }; //if this is added. It uses this instead of the others, because it uses
  //the first one it finds in Dog. If it doesnt find anything it looks for it
  //in prototype
}*/
let obj = { name: "jussi" };

/*function Dog(name) {
  this.name = name;
  this.sniffButt = this.sniffButt.bind(obj);
}*/ //this makes all the names jussi, because obj contains name key that has jussi
// and we use bind to make sniffbutt always contain jussi

function Dog(name) {
  this.name = name;
  this.sniffButt = this.sniffButt.bind(this);
} // now it works normally, since we bind the object this to sniffbutt instead of jussi
Dog.prototype.sniffButt = function () {
  console.log(this.name + " sniffs butt");
}; //this is once in memory

/*
Dog.prototype.delayedSniffButt = function () {
  setTimeout(this.sniffButt, 1000);
};

spot.delayedSniffButt();
vilma.delayedSniffButt();
*/ //This doesnt work, because it calls sniffbutt like a normal function call.

let spot = new Dog("spot");
let vilma = new Dog("vilma");
spot.sniffButt();
vilma.sniffButt();
