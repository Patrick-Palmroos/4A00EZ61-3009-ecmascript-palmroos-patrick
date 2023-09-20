function Person(fname, lname) {
  this.fname = fname;
  this.lname = lname;

  console.log(this instanceof Person);
}

let jaska = new Person("jaska", "mäkinen");
console.log(jaska.fname + " " + jaska.lname);

/*var obj = Person("jaska", "mäkinen"); ==== this makesobject be the function instead
an object. It crashes the program*/
