alert('hola mundo 2');

function formLoaded(){
  alert('hola mundo 6');
};

// Best native way to do it
document.addEventListener('DOMContentLoaded', function(event){
  alert('hola mundo 7');
});
