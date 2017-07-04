'use strict'
function Person(name, lastName, age, gender){
  this.name = name;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

var person1 = new Person('Luis', 'Cubillo', 30, 'male');

// Prototype of person2 is person1
var person2 = Object.create(person1);

// Gets the original constructor
var person3 = new person1.constructor('Diego', 'Chan', 30, 'male');

Person.prototype.sayHello = function(){
  alert(this.name);
}

alert(msj);
var msj = 'hello world';
