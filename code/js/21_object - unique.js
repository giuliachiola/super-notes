/*
  ======================================== object UNIQUE values ====================================================
*/


// trovare oggetti unici per codice univoco

const fruits = [
  { name: 'apple', 
  	code: '023'
  },
  { name: 'peach', // da eliminare
  	code: '023'
  },
  { name: 'apple', // da eliminare
  	code: '023'
  },
  { name: 'banana',
  	code: '030'
  },
  { name: 'kiwi',
  	code: '031'
  },
]	

const fruitsUnique = fruits.filter((obj, pos, arr) => {
	return arr.map(mapObj => mapObj['code']).indexOf(obj['code']) === pos
})

console.log(fruitsUnique)

// Nota: .indexOf restituisce la posizione dell'array alla quale viene trovato un determinato elemneto (restituisce sempre il primo che trova)

/*
  giro 1 code 23 pos 0
  - prendo il codice 023
  - riprendo tutto l'array fruits, e guardo se dentro l'array fruits è presente un elemento con codice 023
  - se lo trovo ed è alla mia posizione restituisco true, se lo trovo e non è alla mia posizione (è un duplicato) restituisco false

  giro 2 code 23 pos 1
  - prendo il codice 023
  - (idem giro 1) riprendo tutto l'array fruits, e guardo se dentro l'array fruits è presente un elemento con codice 023
  - stavolta lo trovo ma è alla posizione 0, mentre io sono alla posizione 1 quindi non va bene, restituisco false

  ....

*/

/*

testing 030, pos = 0

030 0  // lo trova ed è alla sua posizione (pos = 0)
023 -1
023 -1
030 0  
031 -1
returning true
---

testing 023, pos = 1

030 -1
023 0 // il primo che trova è alla sua posizione (pos = 1)
023 0
030 -1  
031 -1
returning true
---

testing 023, pos = 2

030 -1
023 0  // il primo che trova NON è alla sua posizione  (pos = 1)
023 0 
030 -1  
031 -1
returning false
---

testing 030, pos = 3

030 0 // il primo che trova NON è alla sua posizione  (pos = 0)
023 -1  
023 -1 
030 0  
031 -1
returning false
---

testing 031, pos = 4

030 -1
023 -1 
023 -1 
030 -1  
031 0  // il primo che trova è alla sua posizione (pos = 4)
returning false
---

*/