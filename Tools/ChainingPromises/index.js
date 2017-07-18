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
  willIGetNewPhone.then(showOff).then(function(phone){
    console.log('Fulfilled ', phone);
  }).catch(function(error){
    console.error('Didn\'t get the phone', error);
  });
}

var showOff = function(phone){
  return new Promise(function(resolve, reject){
    resolve('Hola Diego, vea mi teléfono xD '+ phone.brand);
  });
};

askMom();

// Optional small showOff promise example

// var showOff = function(phone){
//   return Promise.resolve('Hola Diego, vea mi teléfono xD '+ phone.brand);
// };

// External async chaining example

// getProduct(id){
//   return db.get(id).then(function(result){
//     var json = transform(result);
//     return json;
//   });
// }
//
// getProduct(2).then(function(json){
//   //...
// });
