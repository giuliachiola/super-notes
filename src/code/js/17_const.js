/*
  ======================================== CONST ====================================================
*/

const foo = {};
foo.bar = 42;

console.log(foo.bar);
// => 42


const test = 27;
test = 42;

// => Uncaught TypeError: Assignment to constant variable.




// Primitive values, i.e. numbers, strings, booleans, symbols, null, or undefined, are always immutable.

var foo = 27;
foo.bar = 42;
console.log(foo.bar);
// => `undefined`

// To make an object’s values immutable, use Object.freeze().

const foo = Object.freeze({
  'bar': 27
});
foo.bar = 42; // throws a TypeError exception in strict mode;
              // silently FAILS in sloppy mode
console.log(foo.bar);
// => 27


// ------------------------

const object1 = {
  property1: 42
};

const object2 = Object.freeze(object1);

object2.property1 = 33;
// Throws an error in strict mode

console.log(object2.property1);
// expected output: 42

// ------------------------

const person = {
 name: 'Wes',
 age: 28
}

// I try to update something in the const object by typing 
person = { name: 'Wesley' } 
// it won’t allow me to do that.

// However, the properties of a const variable can change. That’s because the entire object is not immutable. It just can’t be reassigned entirely.

/*
  ======================================== LET ====================================================
*/

const key = 'abc123';
let points = 50;
let winner = false;  // questo è come se fosse winner n.1
//let winner = false outside of the if loop is scoped to the window.

if(points > 40) {
  // inizio "block"
   let winner = true  // questo è come se fosse winner n.2 (ha un block scope differente da winnder n.1)
   // let winner = true inside the if loop is scoped to the block.
  // fine "block"
}

console.log('winner', winner)
// => false --> e non true come ci aspetteremmo, perché effettivamente questo winner qui è winner n.1 (siamo fuori da "block")
