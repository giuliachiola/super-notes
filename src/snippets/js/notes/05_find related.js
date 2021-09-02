/*
  ======================================== related image ====================================================
*/

removeRelatedImage: (state, { matchImage, imageToRemove }) => {
      console.log('matchImage', matchImage)
      console.log('imageToRemove', imageToRemove)
      state.product.images = state.product.images.map(image => {
        if (image.id === matchImage.id && image.related && image.related.length > 0) { // trovo immagine
          image.related = image.related.filter(relatedId => relatedId !== imageToRemove) // filtro le correlate per togliere quella che voglio eliminare
        }
        return image // argomento che esce, dal blocco if non esce!
      })
    },