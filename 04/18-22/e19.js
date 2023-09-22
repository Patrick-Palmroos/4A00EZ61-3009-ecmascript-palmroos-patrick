let user = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
  sayDelayedHello: function () {
    // THIS WORKS
    console.log(this);
    let thisWorks = this;
    setTimeout(function () {
      // THIS DOES NOT WORK
      thisWorks.sayHello();
    }, 1000);
  },
};
user.sayDelayedHello();

//This program first prints the user and then the function sayhello.
//This works because we make thisWorsk variable contain this, so we avoid losing it.
