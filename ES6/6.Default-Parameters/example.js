// Default parameters

// Before
function add(x, y, z){
  y = y? y : 5;
  z = z? z : 3;
  return x + y + z;
}
add(1,2,3); // 6
add(1,2); // 6
add(0); // 8

// After
function add(x, y=5, z=3){
  return x + y + z;
}
add(1,2,3); // 6
add(1,2); // 6
add(0); // 8

function include(a, list=[]){
  list.push(a);
  return list;
}

include('hola'); // ['hola']
include('mundo'); // ['mundo']

//var object = object || {};
