/*
  ======================================== SCOPED ====================================================
*/

// -----------------------------------------
// A globally - scoped variable
// -----------------------------------------


// global scope
var a = 1;

function one() {
  alert(a); // alerts '1'
}

// -----------------------------------------
// Local scope
// -----------------------------------------


// global scope
var a = 1;

function two(a) {
  // local scope
  alert(a); // alerts the given argument, not the global value of '1'
}

// local scope again
function three() {
  var a = 3;
  alert(a); // alerts '3'
}

// -----------------------------------------
// Other
// -----------------------------------------

// https://stackoverflow.com/questions/500431/what-is-the-scope-of-variables-in-javascript
