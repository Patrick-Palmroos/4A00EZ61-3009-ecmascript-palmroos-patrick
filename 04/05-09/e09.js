function Person(fname, lname) {
  if (this instanceof Person) {
    this.fname = fname;
    this.lname = lname;
  } else {
    return new Person(fname, lname);
  }
}

let jaska = Person("jaska", "mäkinen");
console.log(jaska.fname + " " + jaska.lname);
