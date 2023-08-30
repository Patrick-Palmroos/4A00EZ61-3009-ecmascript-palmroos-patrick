var readlineSync = require("readline-sync");

function askName() {
  let name = readlineSync.question("What is your name?\n");
  let num;
  let isCorrect = false;

  while (!isCorrect) {
    num = parseInt(readlineSync.question("Give a number above 0\n"));
    if (num > 0) {
      isCorrect = true;
    }
  }

  console.log(name.repeat(num));
}

askName();
