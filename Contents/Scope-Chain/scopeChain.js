function a() {
  b();
  function b() {
    console.log(x);
  }
}
const x = 10;
a(); //10
