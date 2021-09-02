/*
  ======================================== ITERATE loop through ====================================================
*/


const times = (x) => {  // times è una funzione che riceve come parametro in ingresso x
  return (f) => { // times mi restituisce una funzione
    if (x > 0) {
      f()
      times (x - 1) (f)
      }
  }
}

times(3)(function() {
  console.log('pippo')}
)

/*

pippo
pippo
pippo

*/