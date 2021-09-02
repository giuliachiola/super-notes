/*
  ======================================== MAP ====================================================
*/

// -----------------------------------------
// senza MAP
// -----------------------------------------

imageRelatedObject () { 
	let tempArray = []
	this.imageInner.related.forEach(relatedId => {
	  this.product.images.filter(function (v) {
	    if (v.id === relatedId) {
	      tempArray.push(v)
	    }
	  })
	})
	return tempArray
},



// -----------------------------------------
// con MAP
// -----------------------------------------

imageRelatedObject () { 
  return this.imageInner.related.map(relatedId => {
    const filtered = this.product.images.filter(image => image.id === relatedId)
    return filtered.length ? filtered[0] : {}
  })
},

/*
  ======================================== MAP return ====================================================
*/

return this.imageInner.related.map(relatedId => { /* ecctera */

// è la stessa cosa di usare un nuovo array temporaneo e poi restituirlo:

var nuovoArray = []
nuovoArray = this.imageInner.related.map(relatedId => { /* ecctera */
return nuovoArray


/*
  ======================================== MAP invece di pushare in nuovo array ====================================================
*/

// selectedCards è un array di immagini (ogni immagine è un oggetto che contiene molte proprità tra cui author e title)

// -- parte 1
// metodo 1: salvare il valore degli autori che trova, di volta in volta metterli in un array authors
let authors = []

selectedCards.filter(card => {
  authors.push(card.author)
})

// metodo 2: fa la stessa identica cosa, più efficente (restituisce l'array authors)
let authors = selectedCards.map(card => card.author)

// ["Filippo Brunelleschi", "Antonello da Messina", "Antonello da Messina"]

// -- parte 2
// devo trovare i valori unici 
let uniqueAuthors = [...new Set(authors)]  // The constructor of Set takes an iterable object, like Array, and the spread operator ... transform the set back into an Array

// ["Filippo Brunelleschi", "Antonello da Messina"]



