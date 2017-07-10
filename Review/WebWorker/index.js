function SayHi(){
  worker.postMessage({'cmd': 'start', 'msg': 'Hi'});
}

function UnknownCommand(){
  worker.postMessage({'cmd': 'HolaMundo', 'msg': '???????'});
}

function Stop(){
  worker.postMessage({'cmd': 'stop', 'msg': 'Bye'});
}

var worker = new Worker('worker.js');

worker.addEventListener('message', function(e){
  document.getElementById('result').textContent = e.data;
}, false);
