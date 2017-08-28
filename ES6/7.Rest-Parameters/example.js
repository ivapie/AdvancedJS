// Rest parameters
// Before

function add(x, y){
  var a = Array.prototype.slice.call(arguments, 2);
  return (x + y) * a.length;
}

add(1, 2, 'hello', true, 7);

// After

function add(x, y, ...a){
  return (x + y) * a.length;
}

add(1, 2, 'hello', true, 7);
