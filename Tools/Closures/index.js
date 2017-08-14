function showName(first, last){
    var nameIntro = 'Your name is ';
    function makeFullName(){
      return nameIntro + first + ' ' + last;
    }

    return makeFullName();
}

// Example 2
showName('Eduardo', 'Oviedo');

function celebrityID(){
  var celebrityID = 999;
  var API = 'http://';
  var getID = function(){
    return celebrityID;
  }
  var setID = function(id){
    celebrityID = id;
  }

  return {
    getID: getID,
    setID: setID
  };
}

var celebrity = celebrityID();
console.log(celebrity.getID());
celebrity.setID(666);
console.log(celebrity.getID());
