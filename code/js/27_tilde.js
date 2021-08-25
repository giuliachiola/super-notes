/*
  ======================================== Tilde ~ (bitwise) ====================================================
*/

var test = "hello world";

test.indexOf("w") // 6  => se c'è restituisce la posizione

~test.indexOf("w") // -7  => con la tilde, se c'è restituisce un numero diverso da zero

~test.indexOf("a") // 0 => con la tilde, se non c'è restituisce zero

// --------------

// Tilde converte anche

~2;  // -3  => prende il numero e fa -(N+1). = - (2 + 1) = -3

// Doppia tilde converte stringhe in numeri
~~"1"  // 1
~~true // 1
~~"43" // 43