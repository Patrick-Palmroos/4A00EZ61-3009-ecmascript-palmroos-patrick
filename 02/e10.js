function doIt(a = "", b = "", c = "") {
  let printable = "";
  for (let i = 0; i <= arguments.length; i++) {
    if (arguments[i] != undefined) {
      printable += arguments[i];
    }
  }

  console.log(printable);
}

doIt("a"); // outputs a
doIt("a", "b"); // outputs ab
doIt("a", "b", "c"); // outputs abc
