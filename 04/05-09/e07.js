function Person(fname, lname) {
  if (this instanceof Person) {
    this.fname = fname;
    this.lname = lname;
  } else {
    throw new TypeError("Cannot call a class as a function");
  }
}

let jaska = new Person("jaska", "mäkinen");
console.log(jaska.fname + " " + jaska.lname);
