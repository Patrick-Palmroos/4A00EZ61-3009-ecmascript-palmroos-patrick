var fs = require("fs");

let arg = process.argv;

function main() {
  let numberArr = [7];
  if (arg.length == 9) {
    numberArr = argToNumArrZeroToForty(arg);
    if (numberArr.length == 7) {
      if (!checkArrForDublicates(numberArr)) {
        let sevenWon = false;
        let spins = 0;
        let Sr = [7];

        while (!sevenWon) {
          spins++;
          let result = lotterySpin(numberArr);
          switch (result) {
            case 1:
              if (Sr[0] == null) {
                Sr[0] = spins;
              }
              break;
            case 2:
              if (Sr[1] == null) {
                Sr[1] = spins;
              }
              break;
            case 3:
              if (Sr[2] == null) {
                Sr[2] = spins;
              }
              break;
            case 4:
              if (Sr[3] == null) {
                Sr[3] = spins;
              }
              break;
            case 5:
              if (Sr[4] == null) {
                Sr[4] = spins;
              }
              break;
            case 6:
              if (Sr[5] == null) {
                Sr[5] = spins;
              }
              break;
            case 7:
              if (Sr[6] == null) {
                Sr[6] = spins;
              }
              sevenWon = true;
              break;
            default:
              break;
          }
        }

        lotteryResults(Sr);
      } else {
        console.log("Please do not use duplicate numbers");
      }
    } else {
      console.log("Lottery numbers can be only from range of 0 - 40");
    }
  } else {
    console.log("Give 7 numbers from 0-40");
  }
}

function argToNumArrZeroToForty(argArr) {
  let numArr = [7];

  //tries to turn command line arguments into a number array
  for (let i = 2; i < argArr.length; i++) {
    let num = parseInt(argArr[i]);
    if (!isNaN(num)) {
      //after array variable wasnt a NaN we check if its more than 0 and 40 or less
      if (num > 0 && num <= 40) {
        numArr[i - 2] = num;
      }
    } else {
      console.log("Lottery slot number " + (i - 1) + " was not a number");
      break;
    }
  }
  return numArr;
}

function checkArrForDublicates(arr) {
  //checks for duplicate numbers
  let isDube = false;
  for (let a = 0; a < arr.length - 1; a++) {
    for (let b = a + 1; b < arr.length; b++) {
      if (arr[a] == arr[b]) {
        isDube = true;
        break;
      }
    }
  }

  return isDube;
}

//generates an array of unique numbers from 0-40
function generateArrOfRandNums(arrLength) {
  let length = parseInt(arrLength);
  let genArr = [length];

  if (!isNaN(length)) {
    let isNotDubl = false;

    while (!isNotDubl) {
      for (let i = 0; i < length; i++) {
        genArr[i] = Math.floor(Math.random() * 40) + 1;
      }

      if (checkArrForDublicates(genArr)) {
        isNotDubl = false;
      } else {
        isNotDubl = true;
      }
    }
  } else {
    console.log("Random number gen parseInt NaN Error");
  }
  return genArr;
}

function lotterySpin(userNumbers) {
  let results = 0;
  let lotteryArr = generateArrOfRandNums(7);

  for (let i = 0; i < 7; i++) {
    for (let a = 0; a < 7; a++) {
      if (userNumbers[i] == lotteryArr[a]) {
        results++;
      }
    }
  }

  return results;
}

function lotteryResults(resultArr) {
  let oldHs;
  try {
    oldHs = parseFloat(fs.readFileSync("e15-highscore.txt", "utf-8"));
  } catch (e) {
    console.log(e);
  }
  for (let i = 0; i < 7; i++) {
    let years = (resultArr[i] / 52).toFixed(2);
    console.log(
      "You got " + (i + 1) + " correct, it took " + years + " years!"
    );
  }

  if (oldHs == 0) {
    try {
      fs.writeFileSync(
        "e15-highscore.txt",
        (resultArr[6] / 52).toFixed(2).toString()
      );
    } catch (e) {
      console.log(e);
    }
    console.log(
      "\nYou got a new highscore of " +
        (resultArr[6] / 52).toFixed(2) +
        " years!!"
    );
  } else if (oldHs > resultArr[6]) {
    try {
      fs.writeFileSync(
        "e15-highscore.txt",
        (resultArr[6] / 52).toFixed(2).toString()
      );
    } catch (e) {
      console.log(e);
    }
    console.log(
      "\nYou got a new highscore for the jackpot! old score was " +
        oldHs +
        " years and your new score is " +
        (resultArr[6] / 52).toFixed(2) +
        " years!!"
    );
  }
}

main();
