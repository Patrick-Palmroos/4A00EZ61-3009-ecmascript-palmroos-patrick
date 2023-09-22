function doIt(a, b) {
  console.log(this);
}
let object = { key: "value" };
doIt.apply([object, 5, 5]);

/*only difference between apply and call, is that when using apply
you give the values in an array. Otherwise its identical"*/
