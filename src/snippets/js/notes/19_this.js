/*
  ======================================== THIS ====================================================
*/

// ‘this’ always references the owner of the function it is in.


// --------------------------------- outside ---------------------------------

// se utilizzata fuori da qualsiasi funzione, corrisponde alla Window

console.log(this) // Window

// --------------------------------- inside a simple function ---------------------------------

function hello () {
  console.log(this)
}

hello() // Window

// --------------------------------- inside a constructor ---------------------------------

// When the function is called as a constructor, this refers to the newly constructed object.

function Person (age) {
  this.age = age
}

let greg = new Person(22)
let thomas = new Person(24)

console.log(greg) // this.age = 22
console.log(thomas) // this.age = 24

// --------------------------------- inside an event listener ---------------------------------

// When used in an event listener, this is set to the element that fired the event.

let button = document.querySelector('button')

button.addEventListener('click', function() {
  console.log(this) // button
})

// --------------------------------- inside an object ---------------------------------

// If the ‘this’ keyword were inside an object’s method (a function that belongs to an object) it would refer to the object.
var bunny = {
  name: 'Usagi',
  showName: function() {
    alert(this.name);
  }
};

bunny.showName(); // Usagi