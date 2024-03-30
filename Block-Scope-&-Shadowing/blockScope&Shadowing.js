{
  // compound statement
  const x = 10;
  console.log(x);
}

//expects atleast a statement
// if (true)

const p = "season";
if (true) console.log(p);

if (true) {
  const x = 10;
  console.log(x);
}

{
  //hoisted in block scope
  const x = 20;
  //hoisted in block scope
  let y = 30;
  //   hoisted in global scope
  var z = 40;
}

// shadowing var
var j = 10;
{
  var k = 11;
  console.log(k);
}

console.log(k);

// shadowing let
let m = 10;
{
  let m = 11;
  console.log(m);
}

console.log(m);
