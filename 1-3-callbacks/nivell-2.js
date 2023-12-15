// Exercici 3

// Ús de callbacks en funcions asíncrones: Escriu una funció esperarISaludar que accepti dos paràmetres: un nom i una funció de callback.
// La funció ha d'esperar 2 segons i llavors invocar la funció de callback, passant el nom com a paràmetre.

function esperarISaludar(nom, callback) {
  const time = 2000;
  setTimeout(() => callback(nom), time);
}

// Exercici 4
// Callbacks amb arrays: Escriu una funció processarElements que accepti dos paràmetres: un array i una funció de callback. 
// La funció processarElements ha d'invocar la funció de callback per cada element de l'array.

function processarElements(array, callback) {
  array.forEach( element => callback(element));
}
