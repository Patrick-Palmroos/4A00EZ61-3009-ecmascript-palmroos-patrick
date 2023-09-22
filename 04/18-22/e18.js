function outer() {
  let a = 5;
  function inner(b) {
    console.log(a + b);
  }
  inner(5);
  inner(6);
  inner(7);
}
outer();
