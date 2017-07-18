var mkdirp  = require('mkdirp');
mkdirp('hola', function(error){
  if (error) {
    console.error(error);
  } else {
    console.log('Directory created');
  }
});
