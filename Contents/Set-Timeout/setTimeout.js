function x() {
  setTimeout(() => {
    console.log("hello");
  }, 1000);
  console.log("this");
}

// x();

function y() {
  for (let i = 0; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}
y();
