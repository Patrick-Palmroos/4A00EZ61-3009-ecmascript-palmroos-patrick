function doIt() {
  console.log(this);
}
obj = { key: "value" };

// Create a copy of the doIt() function so that
// the keyword thisis replaced with obj
let x = doIt.bind(obj);
x();
