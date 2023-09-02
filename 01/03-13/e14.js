var readlineSync = require("readline-sync");
var asciitable = require("asciitable");

let database = [];
let currentId = -1;

function add() {
  let newStudent = {
    id: (currentId += 1),
    name: askString("May I have student name?"),
  };
  database.push(newStudent);
}

function remove() {
  let id = askNumber(0, 999999, "May I have id?");
  let idFound = false;

  for (let i = 0; i < database.length; i++) {
    if (database[i].id == id) {
      database.splice(i, 1);
      idFound = true;
    }
  }

  if (idFound) {
    console.log("id " + id + " succesfully deleted!\n");
  } else {
    console.log("id " + id + " NOT FOUND!!\n");
  }
}

function display() {
  var options = {
    skinny: true,
    intersectionCharacter: "0",
    columns: [
      { field: "id", name: "Student ID Number" },
      { field: "name", name: "Student Name" },
    ],
  };

  var table = asciitable(options, database);

  console.log(table);
}

// Starting point of our app
function main() {
  let runApp = true;

  while (runApp) {
    console.log("[1] Add\n[2] Remove\n[3] Display\n[0] CANCEL\n");

    let num = askNumber(0, 3, "Choice? [1, 2, 3, 0]: ");
    switch (num) {
      case 0:
        runApp = false;
        break;
      case 1:
        add();
        break;
      case 2:
        remove();
        break;
      case 3:
        display();
        break;
      default:
        console.log("!main function switch case error!");
        break;
    }
  }
}

function askNumber(minNum, maxNum, message) {
  let isCorrect = false;
  let num;
  while (!isCorrect) {
    num = parseInt(readlineSync.question(message));

    if (!isNaN(num) && num >= minNum && num <= maxNum) {
      isCorrect = true;
    }
  }

  return num;
}

function askString(message) {
  let isCorrect = false;
  let text;

  while (!isCorrect) {
    text = readlineSync.question(message + "\n");

    if (isNaN(parseInt(text)) && text.length > 0) {
      isCorrect = true;
    }
  }

  return text;
}

main();
