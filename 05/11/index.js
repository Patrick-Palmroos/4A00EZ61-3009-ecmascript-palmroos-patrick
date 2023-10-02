String.prototype.isPalindrome = function () {
  let pali = this.split("").reverse().join("");
  return pali == this;
};

console.log("saippuakauppias".isPalindrome()); // true
console.log("abc".isPalindrome()); // false
