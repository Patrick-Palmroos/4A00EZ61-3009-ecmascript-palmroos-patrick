function doIt() {
  console.log("hello");
}
console.log(typeof doIt);
console.log(doIt instanceof Function);

/*
the first line returns 'function' because it is asking
what type 'doIt' is and its called a function in js. The second
line asks if DoIt has Function in its protoype chain. As DoIt is
a function, it contains it in its prototype.
results for second answer from: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
*/
