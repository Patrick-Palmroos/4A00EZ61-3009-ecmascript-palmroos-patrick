// fileReader is constructor function
let FileReader = require("./filereader.js");

// Create object from the constructor function
let f = new FileReader("index.js");
// Reads the index.js with utf-8 and outputs it's content.
// Outputs also the given path! (index.js)
// If error is found, it will crash the app (throw new Error())
f.readAndOutput();
