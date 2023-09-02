let cmdArgument = process.argv;

if (!isNaN(parseInt(cmdArgument[2])) && !isNaN(parseInt(cmdArgument[3]))) {
  console.log(parseInt(cmdArgument[2]) + parseInt(cmdArgument[3]));
} else {
  console.log("Give 2 numbers");
}
