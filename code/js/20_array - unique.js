/*
  ======================================== array UNIQUE values ====================================================
*/


let arr1 = [3, 5, 2, 2, 5, 5];
let arr2 = [2, 1, 66, 5];
let unique = [...new Set([...arr1,...arr2])];
console.log(unique);