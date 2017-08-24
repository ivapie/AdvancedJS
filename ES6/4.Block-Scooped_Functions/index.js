// Block-Scooped Functions
// Before

(function(){
  var foo = function(){
    return 1;
  };
  foo(); // 1

  (function(){
    var foo = function(){
      return 2;
    };
    foo(); // 2
  })();

  foo(); // 1
})();

// After

{
  function foo(){
    return 1;
  }
  foo(); // 1

  {
    function foo(){
      return 2;
    }
    foo(); // 2
  }

  foo(); // 1
}
