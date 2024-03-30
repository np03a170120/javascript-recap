function x() {
  var x = 10;
  function y() {
    console.log(x);
  }
  return y;
}
var z = x();

console.log(z);
