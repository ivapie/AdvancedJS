var momIsHappy = true;

var willIGetNewPhone = new Promise(function(resolve, reject){
  if (momIsHappy) {
    var phone = {
      brand: 'Pixel',
      version: 2,
      color: 'black'
    };
    resolve(phone);
  } else {
    var reason = new Error('Not happy');
    reject(reason);
  }
});

var askMom = function(){
  willIGetNewPhone.then(function(fulfilled){
    console.log('Fulfilled ', fulfilled);
  }).catch(function(error){
    console.error('Didn\'t get the phone', error);
  });
}

askMom();
