//exercici 3
// Ús enllaçat d'operadors ternaris: Escriu una expressió que utilitzi enllaços d'operadors ternaris 
// per determinar si un número és positiu, negatiu o zero.
// Operador ternari amb funcions: Crea una funció trobarMaxim que accepti tres paràmetres (a, b, c) i utilitzi l'operador ternari per determinar el valor màxim.

function determinaSigne(numero) {
  return numero === 0 
    ? 'El número és zero'
    :  numero > 0
      ? 'El número és positu'
      : 'El número és negatiu';
}