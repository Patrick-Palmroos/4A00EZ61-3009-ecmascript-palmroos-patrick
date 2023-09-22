function helper() {
  user.sayHello();
}
let user = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
  sayDelayedHello: function () {
    setTimeout(helper, 1000);
  },
};
user.sayHello();
user.sayDelayedHello();

/* this works now because the helper wraps the user.sayhello function.
normally set timeout would call it like a regular function, but now it calls
a regular function which calls user.sayhello
*/
