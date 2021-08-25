/*
  ======================================== SPLICE ====================================================
*/


let arr = ["orange", "mango", "banana", "sugar", "tea"];
console.log("Array: " + arr);

let added = arr.splice(2, 0, "water"); // splice va alla posizione n.2 e toglie 0 elementi, inserendo "water" aggiunge "water come elemento"
console.log("arr after added:  " + arr);

let removed = arr.splice(3, 1); // splice va alla posizione n.3 e toglie un elemento
console.log("removed is: " + removed); 
console.log("arr after removed: " + arr);