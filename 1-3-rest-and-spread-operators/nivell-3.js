// Exercici 5
// Spread en Funcions: Crea una funció que accepti tres arguments.
// Després, crea una array amb tres elements i crida la funció utilitzant l'operador spread amb aquesta array.

function example(paramOne, paramTwo, paramThree) {
  console.log(paramOne, paramTwo, paramThree);
}

let array = ["elemntOne", "elemntTwo", "elemntThree"];

example(...array);

// Exercici 6
// Fusionant Objectes amb Spread: Crea dos objectes amb propietats diferents.
// Utilitza l'operador spread per a fusionar aquests dos objectes en un de nou.

let objecte1 = {
  name: "jersey",
  color: "groc",
};

let objecte2 = {
  price: 1.1,
  seasson: "hivern",
};

fusionedObject = { ...objecte1, ...objecte2 };
