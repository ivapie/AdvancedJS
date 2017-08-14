var car = function(color, brand){
  // private
  var color = color;
  // public
  this.brand = brand;

  // private
  var init = function(){
    // code
  };

  // public
  this.print = function(){
    console.log(color);
    console.log(this.brand);
  };
};
