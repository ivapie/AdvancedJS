// Arrow Functions
// Before

events.add(function(x){
  return x + 1;
});

events.multiply(function(a, b){
  return a * b;
});

events.addSubstract(function(a, b, c){
  var add = a + b;
  var sub = add - c;
  return sub;
});

//////// Click event example
this.cont = 0;
button.addEventListener('click', function(){
  this.cont += 1; // error :(
}.bind(this)); // <-- this fixes it

// Other example of how to fix scope issues
function(a, b){
  this.a;
  this.b;

  this.add = function(){
      this.a;
  }.call(this, [a, b, c]);
}

// After

// implicit return, inline body, inline parameter
events.add(x => x + 1); // Goes to

// implicit return, inline body
events.multiply((a, b) => a * b);

events.addSubstract((a, b, c) => {
  let add = a + b;
  let sub = add -c;
  return sub;
});

//////// Click event example
this.cont = 0;
button.addEventListener('click', () => {
  this.cont += 1; // this works √
});
