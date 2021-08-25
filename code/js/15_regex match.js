/*
  ======================================== REGEX match ====================================================
*/


let regex1 = new RegExp('\\w+');
let word1 = 'ciao123'

regex.test(word1)
// true --> 'ciao123' contiene almeno una lettera

let word2 = 'ciao'
let regex2 = new RegExp('\\d+');
regex.test(word2)
// false --> 'ciao' non contiene almeno un numero