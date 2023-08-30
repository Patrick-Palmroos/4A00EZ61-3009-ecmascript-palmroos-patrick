var readlineSync = require("readline-sync");

function askName() {
  let name = readlineSync.question("What is your name?\n");
  console.log("your name is " + name);
}

askName();
