/*
  ======================================== COMPARE array ====================================================
*/

// voglio vedere se il secondo array di test è contenuto COMPLETAMENTE nel primo array
arrayKeywords = [‘a’, ‘b’, ‘c’, ‘d’]
testKeywords = [‘a’, ‘b’]
found = testKeywords.every(r=> arrayKeywords.includes(r))

// found = true

/*
  ======================================== GESTIONE DEI CASI con array ====================================================
*/


if (fruit == 'banana' || fruit == 'lemon' || fruit == 'mango' || fruit == 'pineapple') {
    handleYellowFruit();
}

// è più efficiente scriverlo

if (['banana', 'lemon', 'mango', 'pineapple'].indexOf(fruit) >= 0) {
    handleYellowFruit();
}

/*
  ======================================== ARRAY CONTENUTO IN UN ALTRO ===================================================
*/


let completeA = ['a','b','c','d']
let subsetA = ['a','b']

// controllo se tutto l'array 2 è contenuto nell'array 1

subsetA.every(elem => completeA.indexOf(elem) > -1);
// > true


