function add(a,b){
  var a, b;
  a += b;
  return a;
}
function subtract(a,b){
  var a, b;
  a -= b;
  return a;
}
function multiple(a,b){
  var a, b;
  a *= b;
  return a;
}
function divide(a,b){
  var a, b;
  a /= b;
  return a;
}

function makeInt(n){
  var internal = parseInt(n, 10);
  return internal;
}

function preserveDecimal(n){
  var internal;
  internal = parseFloat(n);
  return internal;
}
