/*
  ======================================== OBJECTS ====================================================
*/

// ----- oggetto senza proprietà

user = {}

if (user) {
  // oggetto non è undefined
}

if (Object.getOwnPropertyNames(user).length > 0) {
  // esiste e non ha proprietà (metodo 1)
}

if (Object.keys(user).length === 0 && user.constructor === Object) { // Object.keys(users) = array di proprietà dell'oggetto
  // esiste e non ha proprietà (metodo 2)

  // Object.keys(user).length --> funziona sia che user sia un oggetto sia che sia qualcos'altro
  // user.constructor === Object --> devo controllare che sia effettivamente un oggetto
}


// ----- oggetto con proprietà

user = {
  name: ''
  mail: ''
  age: 30 // cast --> "30"
}

// testare se sono vuoti:

// user.keys --> ['name','mail','age'] --> restutisce array di chiavi
// user.values --> ['','',30] --> restutisce array di valori

if (user.values.filter(property => String(property) !== '').length !== 0) {
  // una qualunque era piena
} else {
  // tutte i values vuoti
}


// --- cancella tutte le proprietà di un oggetto
// ATTENZIONE non usarlo in Vue

for (var proprietà in user) delete user[proprietà]

// cancellare UNA proprietà
delete user[proprietà]


/*
  ======================================== OBJECTS properties name ====================================================
*/

const key = 'nome'
const value = 'ciccio pasticcio'

const oggetto1 = {
  key: value
}

// oggetto1
// {key: "ciccio pasticcio"}

const oggetto2 = {
  [key]: value        // --> questa sintassi vuol dire prendi il 'content' della key e usalo come nome della property
}

// oggetto2
// {nome: "ciccio pasticcio"}

/*
  ======================================== OBJECTS dynamic properties ====================================================
*/

const newProp = 'b'

const anObject = {
  a: 'a value',
  // Dynamic property names!
  [newProp]: 'b value',
  ['(c insieme a )' + newProp]: 'c value',
}

console.log(anObject)

/*
{
  "a":"a value",
  "b":"b value",
  "(c insieme a )b":"c value"
  }
*/ 
