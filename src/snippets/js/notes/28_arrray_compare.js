/*
  ======================================== Compare Arrays ====================================================
*/

let a = [1, 2, 3]
let b = [1, 3, 2]
let c = [1, 2, 4]

a.length === b.length && a.sort().every(function(value, index) { return value === b.sort()[index]}) // true

// oppure
a.every(item => b.includes(item)) // true
