function AddCounter(){
  if (typeof(Storage) !== 'undefined') {
    if (localStorage.count) {
      localStorage.count = Number(localStorage.count)+1;
    } else {
      localStorage.count = 1;
    }
    document.getElementById('result').innerHTML = localStorage.count;
  } else {
    document.getElementById('result').innerHTML = 'Sorry no storage';
  }
}
