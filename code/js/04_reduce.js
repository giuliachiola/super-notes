/*
  ======================================== REDUCE ====================================================
*/

/*
`reduce` è come quelle funzioni che richiamano se stesse. è ricorsivo
come funziona… da punto di vista della sintassi, come `map` e `filter`
con una piccola eccezione: il valore iniziale
infatti, se io devo prendere un elemento dell’array alla volta
farci qualcosa con il risultato che ho ottenuto dal fare la stessa operazione con l’elemento precedente
(quando comincio mi manca _l’elemento precedente_)
*/

array.reduce(function(accumulator, value, index, array), initialValue)


// initialValue` è l’elemento precedente per il primo elemento dell’array, `accumulator` è la riduzione fin’ora in corso

[1,2,3,4,5].reduce(somma, elementoArray => somma += elementoArray)

// fa 1+2+3+4+5 = 15
// invece

[1,2,3,4,5].reduce(somma, elementoArray => somma += elementoArray, 100)

// fa 100+1+2+3+4+5 = 115
// perché la somma la inizio con 100 (se ometto, vale il primo elemento dell’array)