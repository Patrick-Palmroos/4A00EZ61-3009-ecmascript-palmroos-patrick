const isPositiveInteger = function (val, success, error) {
  val >= 0 ? success() : error();
};

function yes() {
  console.log("positive");
}
function no() {
  console.log("non-positive");
}

//invoking isPositiveInteger
isPositiveInteger(-5, yes, no);
isPositiveInteger(5, yes, no);
