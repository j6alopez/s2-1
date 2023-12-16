// Exercici 1
// Operador Spread en Arrays: Crea dues arrays, array1 i array2. 
// Utilitza l'operador spread per a crear una tercera array que contingui tots els elements de array1 i array2. 

let array1 = ['elemntOne', 'elemntTwo','elemntThree'];
let array2 = ['elemntFour', 'elemntFive'];
let array3 = [...array1, ...array2];
console.log(array3);

// Exercici 2
// Operador Rest en Funcions: 
// Crea una funció 'suma' que utilitzi l'operador rest per a acceptar un nombre indeterminat d'arguments i retornar la seva suma.

function suma(...arguments) {
  let total = 0;

  for(numero of arguments) {
    total = total + numero;
  }
  return total;
}
