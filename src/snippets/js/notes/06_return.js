/*
  ======================================== RETURN ====================================================
*/

/*
  ============ es 1 ================
*/

// -------- con return ----------

function myReturnFunction() {
  var test = 1 + 1;
  return test;
}

var feedback = myReturnFunction();

// >> feedback = 2

// -------- senza return ----------

function myReturnFunction() {
  var test = 1 + 1;
}

var feedback = myReturnFunction();

// >> feedback = undefined

/*
  ============ es 2 ================
*/

var divideByFour = function (num) {
  num / 4;
}

var divided = divideByFour(27); // null  --> senza il 'return' il risultato non esiste al di fuori


var divideByFour = function (num) {
  return num / 4;
}

var divided = divideByFour(27); // 6.75
