var fs = require("fs");
var cmdArgument = process.argv;

//takes a file and copies it to another
function fileReaderAndCopier() {
  fs.readFile(cmdArgument[2], "utf8", (error, data) => {
    fs.writeFile(cmdArgument[3], data, (err) => {
      if (err) {
        throw new Error("could not copy the file");
      } else {
        console.log("Copy succesful");
      }
    });
  });
}

fileReaderAndCopier();
