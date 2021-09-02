/*
  ======================================== Objects - Add property ====================================================
*/

let myobject = {
  a: 1,
  b: 2,
  c: 3
};

object1 = Object.assign({d: 5}, myobject);

console.log(object1); // { d: 5, a: 1, b: 2, c: 3 }
