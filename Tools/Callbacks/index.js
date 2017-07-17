// Normal callbacks

function start(done){
  // ...
  console.log('starting app...');
  done();
};

start(function(){
  console.log('Callback done...')
});

start(startReady);

var startReady = function(){
  console.log('startReady called...');
};

// Error callbacks

function saveUser(user, success, fail){
  // saving user...
  if (user){
    success();
  }else{
    fail(error);
  }
};

saveUser({}, function(){
  // success...
}, function(error){
  console.error('Something happened...', error);
});
