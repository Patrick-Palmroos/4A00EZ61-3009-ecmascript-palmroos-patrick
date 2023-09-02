var readlineSync = require("readline-sync");
var text = "";

function askString() {
  let isCorrect = false;

  while (!isCorrect) {
    text = readlineSync.question("Give me some text\n");

    if (isNaN(parseInt(text))) {
      isCorrect = true;
    }
  }
}

function palindromeCheck() {
  let paliTxt = "";

  for (let i = text.length; i >= 0; i--) {
    paliTxt += text.charAt(i);
  }

  if (text == paliTxt) {
    console.log("The word was a palindrome!");
  } else {
    console.log("The word wasnt a palindrome :(");
  }
}

askString();
palindromeCheck();
