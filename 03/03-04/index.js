var fs = require("fs");
var readlineSync = require("readline-sync");

const askFileName = () => readlineSync.question("Give file name: "); //arrow function for asking file name

/*function readUserFile() {
  let name = askFileName();

  fs.readFile(name, "utf-8", function (err, data) {
    if (!err) {
      console.log(`The content of the file is:
${data}`);
    } else {
      console.log(err);
    }
  });
}

readUserFile();
*/

function checkForFile() {
  let name = askFileName();

  fs.exists(name, (e) => {
    e ? readUserJsonFile(name) : console.log(`file ${name} doesnt exist.`);
  });
}

function readUserJsonFile(name) {
  fs.readFile(name, "utf-8", function (err, data) {
    if (!err) {
      try {
        const obj = JSON.parse(data);
        if (obj["name"] !== undefined) {
          console.log(obj["name"]);
        } else {
          console.log(`file ${name} contains json but not property name`);
        }
      } catch (err) {
        console.log(`File ${name} doesnt contain json`);
      }
    } else {
      console.log(err);
    }
  });
}

checkForFile();
