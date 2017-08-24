// Simple object
function Person(){
  this.age = 0;

  setInterval(() => this.age ++, 1000);
}

let person = new Person();

// Promise

addPerson().then(result => console.info(result.age), error => console.error(error));
