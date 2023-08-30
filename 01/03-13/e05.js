//When trying to convert a string to a number type, it returns NaN which means 'not a number'

let text = "Heippodei";
let output = "";

for (let i = 0; i < 16; i++) {
  output += Number(text).toString();
}

console.log(output + " batman");
