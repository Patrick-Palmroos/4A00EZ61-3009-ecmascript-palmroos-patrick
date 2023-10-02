const fs = require("fs");

function FileReader(path) {
  this.path = path;
  this.readAndOutput = function () {
    fs.readFile(path, "utf-8", this.done.bind(this));
  };
  this.done = function (err, data) {
    if (err) {
      throw new Error("Incorrect path");
    } else {
      console.log(this.path + "\n" + data);
    }
  };
}

module.exports = FileReader;
