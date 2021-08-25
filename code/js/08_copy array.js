/*
  ======================================== MAP ====================================================
*/

// -----------------------------------------
// usando COPY
// -----------------------------------------

let array = [1, 2, 3, 4]

let newArray = array.slice()


// -----------------------------------------
// usando SPREAD OPERATOR
// -----------------------------------------

let array = [1, 2, 3, 4]

let newArray = array // così lo sto copiando by reference --> se modifico uno modifico l'altro!

let newArray = [...array] // così non lo copio by reference MA by value


// ------- variabili ----- -->  primitive sono passate by value

let a = 10
b = b

a = 30

// b = 10 
// a = 30 --> a NON è cambiato!

// ------- array / object / funzioni (valori composti passati by reference) -----

let a = [1,2,3,4]

b = a 

b = [5,6]

// a = [5,6] --> cambia perché array viene passato by reference
// b = [5,6]