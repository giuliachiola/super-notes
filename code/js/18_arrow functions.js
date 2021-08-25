/*
  ======================================== ARROW FUNCTIONS ====================================================
*/

// Normal Function
const namedFunction = function (arg1, arg2) { /* do your stuff */}

// Arrow Function
const namedFunction2 = (arg1, arg2) => {/* do your stuff */}

// Normal function in a callback
button.addEventListener('click', function () {
  // Do something
})

// Arrow function in a callback
button.addEventListener('click', () => {
  // Do something
})

// ------------------------------------------------


// aguments
const zeroArgs = () => {/* do something */}
const zeroWithUnderscore = _ => {/* do something */}
const oneArg = arg1 => {/* do something */}
const oneArgWithParenthesis = (arg1) => {/* do something */}
const manyArgs = (arg1, arg2) => {/* do something */}

// implicit return
const sum1 = (num1, num2) => num1 + num2
const sum2 = (num1, num2) => { return num1 + num2 }