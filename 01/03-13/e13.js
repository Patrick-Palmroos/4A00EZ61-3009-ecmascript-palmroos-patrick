var readlineSync = require("readline-sync");
var text = "";

function askNumber() {
  let isCorrect = false;

  while (!isCorrect) {
    text = readlineSync.question("Give me a number\n");

    if (!isNaN(parseInt(text))) {
      isCorrect = true;
    }
  }
}

function abs(number) {
  let num = parseInt(number);
  if (num < 0) {
    num *= -1;
  }

  return num;
}

askNumber();
console.log(abs(text));
