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

async function readFileAndParse(fileName) {
  const fileData = await readFile(fileName, "utf-8");
  const finalData = await parseJson(fileData);

  return finalData;
}

const askFileName = () => readlineSync.question("Give file name: ");
readFileAndParse(askFileName())
  .then((name) => console.log(name))
  .catch((msg) => console.log(msg));
