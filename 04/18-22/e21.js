let user = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
  sayDelayedHello: function () {
    let f = this.sayHello.bind(user);
    setTimeout(f, 1000);
  },
};
user.sayDelayedHello();
