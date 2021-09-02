/*
  ======================================== DIFFERENZA tra array ====================================================
*/


var completeList = [1,2,3,4,5]
var invalidList = [1,2]

// Così NON funziona
// --> has NON è un metodo degli array, ma è di map e set
// var validList = completeList.filter((item) => !invalidList.has(item))  // --> NO con .has()


/*
  ============ array.includes() ================
*/

// usare questo :)

let validList = completeList.filter(element => !invalidList.includes(element)) // funziona solo con Babel (se browser vecchio)

// oppyre questo
let validList = completeList.filter(element => invalidList.indexOf(element) === -1)
// => [3, 4, 5]


/*
  ============ Array.prototype.diff ================
*/

// funziona ma non usarlo (crea un nuovo metodo diff sul prototipo array)

Array.prototype.diff = function (arr) {
	return this.filter(i => arr.indexOf(i) === -1); // prende ogni elemento di completeList e guarda se esiste il valore corrente (se esiste, la posizione è diversa da -1)
};

completeList.diff(invalidList);
// => [3, 4, 5]


/*
  ============ set.has() ================
*/

// funziona ma non usarlo

let a = new Set(completeList);
let b = new Set(invalidList);
let difference = new Set([...a].filter(x => !b.has(x)));
// => [3, 4, 5]