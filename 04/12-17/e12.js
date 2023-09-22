let user = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

let myfunc = user.sayHello;
myfunc();
/*
this returns hello, undefined because we call the sayhello
as a regular function.*/
