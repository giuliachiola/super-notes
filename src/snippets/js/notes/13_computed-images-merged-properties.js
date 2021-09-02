/*
  ======================================== COMPUTED image - merged properties ====================================================
*/

 computedImageToEdit () {
let mergedImage = {
  title: undefined,
  author: undefined,
  description: undefined,
  keywords: [],
  related: [], // -- related (non disponibile)
  tags: []
}

// -- author (nota: è case-sensitive! 'Michelangelo' diverso da 'michelangelo')
let authors = this.images.map(card => card.author)
let uniqueAuthors = [...new Set(authors)]

// se mi restituisce un solo elemento significa che in partenza avevano tutti lo stesso autore
mergedImage.author = (uniqueAuthors.length === 1) ? uniqueAuthors[0] : undefined

// -- keywords (voglio solo quelle comuni)
let keywordsGroups = this.images.map(card => card.keywords)
let commonKeywords = keywordsGroups.shift().filter(group => {
  return keywordsGroups.every(k => {
    return k.indexOf(group) !== -1
  })
})
mergedImage.keywords = commonKeywords

// -- tags (voglio solo quelle comuni)
let tagsGroups = this.images.map(card => card.tags)
let commonTags = tagsGroups.shift().filter(group => {
  return tagsGroups.every(t => {
    return t.indexOf(group) !== -1
  })
})
mergedImage.tags = commonTags

return mergedImage
},

