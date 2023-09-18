/*var sum = null;

function makeCalculation() {
  console.log("2) calculating sum...");
  sum = 5 + 5;
  console.log("3) sum is " + sum);
}

function sendStuffToBackend() {
  console.log("4) sending " + sum + " to backend's database");
}

console.log("1) starting the calculation and sending");
setTimeout(makeCalculation, 2000);
setTimeout(sendStuffToBackend, 1000);
console.log("5) ending the calculation and sending");*/

/*this code above doesnt run in the correct order because it doesnt utilize callbacks
for example*/

//=================================================================

/*var sum = null;

function makeCalculation() {
  console.log("2) calculating sum...");
  sum = 5 + 5;
  console.log("3) sum is " + sum);
  setTimeout(sendStuffToBackend, 1000);
}

function sendStuffToBackend() {
  console.log("4) sending " + sum + " to backends database");
  console.log("5) ending the calculation and sending");
}

console.log("1) starting the calculation and sending");
setTimeout(makeCalculation, 2000);*/

/* this works since in the make calculation function we call the sendstufftobackend function thus
running in the correct order*/

//========================================================================

function makeCalculation() {
  function asynFunc(resolve) {
    setTimeout(() => {
      console.log("calculating stuff");
      let division = 5 / 5;
      resolve(division);
    }, 1000);
  }
  const p = new Promise(asynFunc);
  return p;
}

function sendStuffToBackend(result) {
  function asynFunc(resolve) {
    setTimeout(() => {
      console.log(`sending to backend ${result}`);
      resolve("done");
    }, 1000);
  }
  const p = new Promise(asynFunc);
  return p;
}

makeCalculation()
  .then((result) => sendStuffToBackend(result))
  .then((msg) => console.log(msg));
