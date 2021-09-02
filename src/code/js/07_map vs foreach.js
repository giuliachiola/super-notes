/*
  ======================================== MAP ====================================================
*/

// -----------------------------------------
// usando FOR EACH
// -----------------------------------------

let clonedUsers = [...state.users]

clonedUsers.forEach((u, index) => {
	if (u.id === user.id) {
	  clonedUsers[index] = user
	}
})


// -----------------------------------------
// usando MAP
// -----------------------------------------

let clonedUsers = [...state.users]

clonedUsers = clonedUsers.map(u => (u.id === user.id) ? user : u)



/*
  ======================================== MAP VS FILTER ====================================================
*/

// -----------------------------------------
// usando FILTER (più facile da leggere)
// -----------------------------------------

relatedImages () {
  return this.product.images.filter(image => this.image.related.includes(image.id))
}


// -----------------------------------------
// usando MAP
// -----------------------------------------

relatedImages() {
  return this.image.related.map(relatedId => {
    const filteredImages = this.product.images.filter(image => image.id === relatedId)
    return filteredImages.length ? filtered[0] : {}
  })
}


/*
  ======================================== MAP VS FOREACH ====================================================
*/

// Aggiungere + 1 ad ogni elemento dell'array

var nums = [
    5,
    9,
    7
];

// -----------------------------------------
// Procedural style: FOR EACH
// -----------------------------------------

nums.forEach(function (num, index) {
    return nums[index] = num + 1;
});

// -----------------------------------------
// Functional style: MAP
// -----------------------------------------

var oneBetterThanNums = nums.map(function (num) {
    return num + 1;
});

// se poi decidessi di riordinare l'array risultante basterebbe concatenare la funzione .sort()

var oneBetterThanNums = nums.map(function (num) {
    return num + 1;
}).sort();