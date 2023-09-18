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

//checks if file exists and returns a promise.
function checkForFile() {
  let name = askFileName();
  function asynFunc(resolve, reject) {
    fs.exists(name, (e) => {
      e ? resolve(name) : reject(`file ${name} doesnt exist.`);
    });
  }

  let prom = new Promise(asynFunc);
  return prom;
}

//checks for json and name key and returns the value
function readUserJsonFile(name) {
  function asynFunc(resolve, reject) {
    fs.readFile(name, "utf-8", function (err, data) {
      if (!err) {
        try {
          const obj = JSON.parse(data);
          if (obj["name"] !== undefined) {
            resolve(obj["name"]);
          } else {
            reject(`file ${name} contains json but not property name`);
          }
        } catch (err) {
          reject(`File ${name} doesnt contain json`);
        }
      } else {
        reject(err);
      }
    });
  }

  let p = new Promise(asynFunc);
  return p;
}

checkForFile()
  .then((name) => readUserJsonFile(name))
  .then((result) => console.log(result))
  .catch((msg) => console.log(msg));
