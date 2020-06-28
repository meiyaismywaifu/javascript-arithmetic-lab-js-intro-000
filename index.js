function add(a,b){
  /*var a, b;
  a += b;
  return a;*/
  // i'm not sure what's actually going on here. feel like for clarity it should be more like
  var intA = a, intB = b;
  intA += intB;
  return intA;
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
