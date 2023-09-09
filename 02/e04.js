function isPositiveInteger(value, onSuccess, onError) {
  return value >= 0 ? onSuccess() : onError();
}
function yes() {
  console.log("positive");
}
function no() {
  console.log("non-positive");
}

//invoking isPositiveInteger
isPositiveInteger(-5, yes, no);
isPositiveInteger(5, yes, no);
