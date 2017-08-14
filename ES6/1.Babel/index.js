function test(foo,  ...args) {
  let [bar, baz] = args;

  for(let arg of args) {
    let bar = 22;
    console.log(`arg: ${arg} bar: ${bar}`);
  }

  console.log(`done: ${bar} :: ${baz}`);
}

test('aa', 'b', 22, 43);
