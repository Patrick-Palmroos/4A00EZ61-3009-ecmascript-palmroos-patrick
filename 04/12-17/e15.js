let user = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

/*setTimeout(user.sayHello, 1000);
this returns hello, undefined because setTimeout calls
it like a regular function inside itself*/

/*
function sayHello() {
  user.sayHello();
}

setTimeout(sayHello, 1000);

====>>>> this works, because user.sayhello is wrapped. So setTimeout
calls sayHello() which THEN calls user.sayHello() so hello, jack works!
*/

setTimeout(() => user.sayHello(), 1000);
user.sayHello = function () {
  console.log("does it work?");
};

//this changes it to does it work, since setTimeout is async function
//and the code continues forward when settime out is started.
