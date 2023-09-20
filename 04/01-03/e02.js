const doIt = (truFal) =>
  function () {
    truFal ? console.log("world") : console.log("hello");
  };

doIt(false)(); // outputs hello
doIt(true)(); // outputs world
