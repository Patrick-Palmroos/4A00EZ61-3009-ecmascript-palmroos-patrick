function showcase() {
  const num1 = 5;
  var num2 = 999;
  let num3 = 10;

  //num1 = 100; doesnt work since num1 is a constant

  if (true) {
    var num2 = 10; //var is global so it can be changed here
  }

  if (true) {
    let num3 = 100540; //let is block scoped so it wont be changed in the print
  }

  console.log("num1 = " + num1 + ", num2 = " + num2 + " and num3 = " + num3);
}

showcase();
