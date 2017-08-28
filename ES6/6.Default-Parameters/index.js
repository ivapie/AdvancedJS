// Testing empty strings and null

function test(num = 1){
  console.log(typeof num);
}
test(); // number =1
test(undefined); // number =1
test(''); // string =''
test(null) // object =null

function first(word = getWord()){
  console.log(word);
}

getWord(){
  return 'hello';
}

first(); // hello
