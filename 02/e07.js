function repeatMessage(word = "moi", count = 1) {
  let output = "";

  for (let i = 0; i < count; i++) {
    output += word;
  }

  return output;
}

console.log(repeatMessage("moi"));
console.log(repeatMessage("moi", 4));
