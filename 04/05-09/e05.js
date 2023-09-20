function doIt() {
  a = 5;
  console.log(this);
  console.log(this == global);
}

doIt();
console.log(a);

/*this function first prints the information of
global object because this is the same as global.
The latter outputs true since "this" is the same as global
*/
