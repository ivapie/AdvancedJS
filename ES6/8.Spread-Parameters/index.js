let array = ['hello', 'world', 1, 2, 3];

function doSomething(word1, word2, ...nums){
  console.log(word1);
  console.log(word2);
  console.log(nums.length);
}

doSomething(...array); // hello /n world /n 3

///////////////////// Literal objects ///////////////////////////

let obj1 = {id: 1, name: 'Luis'};
let obj2 = {phone: 22335566, address: 'South of here'};

let person = {...obj1, ...obj2}; // {id: 1, name: 'Luis', phone: 22335566, address: 'South of here'}
let personClone = {...person}; // {id: 1, name: 'Luis', phone: 22335566, address: 'South of here'}
