// constant definition √
const MY_FAV = 7;

MY_FAV = 9; // throw error :(

console.log(`My favorite number is ${MY_FAV}`); // 7

const MY_FAV = 20; // throw error :(

var MY_FAV = 20; // throw error :(

let MY_FAV = 20; // throws error :(

if (MY_FAV === 7) {
  let MY_FAV = 20; // loose scope √
  console.log(`My favorite number is ${MY_FAV}`); // 20
  var MY_FAV = 20; // error :(
}

console.log(`My favorite number is ${MY_FAV}`); // 7

const FOO; // missing initializer :(

const MY_OBJECT = {'KEY': 'value'}; // √

MY_OBJECT = {'OTHER_KEY': 'other_value'} // Can't override :(

MY_OBJECT.new_key = 'new_value'; // This works √

const MY_ARRAY = ['A', 'B']; // √

MY_ARRAY.push('X'); // √ ['X']

MY_ARRAY = ['C']; // Error :(
