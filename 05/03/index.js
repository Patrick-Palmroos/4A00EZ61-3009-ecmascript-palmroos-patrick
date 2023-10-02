function Clock() {
  this.time = new Date().toString();
  /*this.startInterval = function () {
    const _this = this;
    setInterval(function () {
      _this.tick();
    }, 1000);
  };*/ //   TASK NUMBER 1: Using closure variable and anonymous inner function

  /*this.startInterval = function () {
    setInterval(() => {
      this.tick();
    }, 1000);
  };*/ //   TASK NUMBER 2: sing arrow syntax

  this.startInterval = function () {
    setInterval(this.tick.bind(this), 1000);
  }; //   TASK NUMBER 3: Using function binding

  this.tick = function () {
    this.time = new Date().toString();
    console.log(this.render());
  };
  this.render = function () {
    return this.time;
  };
}

let clock = new Clock();
console.log(clock.render()); // outputs time
clock.startInterval(); // outputs time for every second, uses render
