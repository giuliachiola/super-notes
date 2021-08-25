/*
  ======================================== MERGE proprerty values ====================================================
*/

let fruits = [
  {
    name: 'apple',
    calories: 100,
    lovesBy: ['Giulia', 'Arianna']
  },
  {
    name: 'pineapple',
    calories: 90,
    lovesBy: ['Mark', 'Chris']
  }
]

let lovesBy = ['Wes', 'Sarah']   

fruits.map(f => {
  f.lovesBy = [...f.lovesBy, ...lovesBy] // mergio i tag che hanno assieme ai tag nuovi che ho assegnato
  return f // devo restituire image altrimenti .map() non restituisce un bel niente!
}


/*

{
    name: 'apple',
    calories: 100,
    lovesBy: ["Giulia", "Arianna", "Wes", "Sarah"]
  },
  {
    name: 'pineapple',
    calories: 90,
    lovesBy: ["Giulia", "Arianna", "Wes", "Sarah"]
  }

*/

/*
  ======================================== OBJECTS ciclare tutti i values per la funzione ====================================================
*/

let apple = {
  name: 'apple',
  calories: 100,
  lovesBy: ['Giulia', 'Arianna']
}

function printFruit(property) {
  console.log(property)
}

Object.keys(apple).map(p => {
  apple[p] = printFruit(apple[p])
})

// è uguale a scrivere

for (let p in apple) {
  apple[p] = printFruit(apple[p])
}

/*

butta fuori (perché c'è il console.log) ognuna di queste righe:

apple
100
["Giulia", "Arianna"]


*/
