//exercici 4
// Operador ternari dins un bucle: Escriu una funció parOImpar que accepti un array de números i utilitzi un bucle per a recórrer l'array. 
// Dins del bucle, utilitza l'operador ternari per a determinar si cada número és parell o imparell.

function parOImpar( numbers) {
    numbers.forEach( number => {
      number % 2 === 0 
        ? message = `Número  ${number} és parel`
        : message = `Número  ${number} és imparell`
      console.log(message);
    });
  }