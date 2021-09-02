/*
  ======================================== Arrays: remove all elements contained in another array ====================================================
*/

let elements = [1,2,3,4,5,6,7,8]
const toRemove = [1,2,5]

elements = elements.filter(el => !toRemove.includes(el)) // [3, 4, 6, 7, 8]
