function doIt(a, b) {
  console.log(this);
}
let object = { key: "value" };
doIt.call(object, 5, 5);

//the first argument allows you to set what this refers to.
//In this example we set it to refrence to object variable, which
//contains one property called key which contains the string "value"
