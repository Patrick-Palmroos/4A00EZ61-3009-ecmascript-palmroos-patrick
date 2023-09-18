function makeCalculation(a, b) {
  function divide(resolve, reject) {
    if (b !== 0) {
      console.log("calculating stuff");
      let result = a / b;
      resolve(result);
    } else {
      reject("cant divide with 0");
    }
  }

  let p = new Promise(divide);
  return p;
}
//makes a division calculation based on given values, returns failure if trying to divide with 0.

function sendStuffToBackend(result) {
  function func(resolve, reject) {
    const random = Math.floor(Math.random() * 2);

    if (random == 1) {
      setTimeout(() => {
        console.log(`sending to backend ${result}`);
        resolve("done");
      }, 1000);
    } else {
      reject("failed to connect to backend");
    }
  }
  const p = new Promise(func);
  return p;
}
//sends the information of a result to backend. Can randomly fail

makeCalculation(10, 5)
  .then((division) => sendStuffToBackend(division))
  .then((msg) => console.log(msg))
  .catch((errMsg) => console.log(errMsg));
