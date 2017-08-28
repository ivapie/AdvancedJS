// Spread parameters
// Before

var params = ['hello', true, 6];
var other = [1, 2].concat(params); // [1, 2, 'hello', true, 6]

var str = 'hello';
var chars = str.split(''); // [h, e, l, l, o]

// After

let params = ['hello', true, 6];
let other = [1, 2, ...params]; // [1, 2, 'hello', true, 6]

let str = 'hello';
let chars = [...str]; // [h, e, l, l, o]
