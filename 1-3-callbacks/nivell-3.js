// Exercici 5
// Escriu una funció processarCadena que accepti dos paràmetres: una cadena de caràcters i una funció de callback. 
// La funció processarCadena ha de convertir la cadena a majúscules i llavors invocar la funció de callback amb la cadena transformada.

function processarCadena(cadena) {
  callback(cadena.toUpperCase());
}

function callback(cadena) {
  console.log(cadena);
}
