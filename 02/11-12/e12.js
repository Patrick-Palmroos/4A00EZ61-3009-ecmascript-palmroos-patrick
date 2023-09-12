var fs = require("fs");
var cmdArgument = process.argv;

const copy = (x, y, cb) => {
  fs.readFile(x, "utf8", (error, data) => {
    if (error) {
      cb("error");
    } else {
      fs.writeFile(y, data, (err) => {
        if (err) {
          cb("error");
        } else {
          cb("success");
        }
      });
    }
  });
};

copy(cmdArgument[2], cmdArgument[3], (success) => {
  console.log(success);
});
