const util = require("util");
var readlineSync = require("readline-sync");
var fs = require("fs");

const readFile = util.promisify(fs.readFile);

function parseJson(data) {
  function func(resolve, reject) {
    const obj = JSON.parse(data);
    if (obj["name"] !== undefined) {
      resolve(obj["name"]);
    } else {
      reject("name key not found");
    }
  }
  const p = new Promise(func);
  return p;
}

const askFileName = () => readlineSync.question("Give file name: ");
readFile(askFileName(), "utf-8")
  .then((data) => parseJson(data))
  .then((name) => console.log(name))
  .catch((msg) => console.log(msg));
