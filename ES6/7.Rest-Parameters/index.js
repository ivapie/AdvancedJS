function getSize(...args){
  console.log(args.length);
}

getSize(); // 0
getSize(1); // 1
getSize(3, 'hello'); // 2
getSize(1, false, true, 'world'); // 4
