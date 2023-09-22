let user = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
  sayDelayedHello: function () {
    //   setTimeout(function () {
    //     this.sayHello();
    //   }, 1000);

    setTimeout(() => {
      this.sayHello();
    }, 1000);
  },
};
user.sayDelayedHello();

/*
var user = {
  name: "Jack",
  sayHello: function sayHello() {
    console.log("Hello, ".concat(this.name, "!"));
  },
  sayDelayedHello: function sayDelayedHello() {
    var _this = this;
    setTimeout(function () {
      _this.sayHello();
    }, 1000);
  }
};
user.sayDelayedHello();
*/

/* ======>>>>
behind the scenes the arrow function creates a variable which contains the information
within this so it doesnt get lost
*/
