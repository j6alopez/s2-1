// Exercici 3
// Copiant objectes amb Spread: Crea un objecte 'objecte1'.
// Després crea un segon objecte, 'objecte2', que sigui una còpia de 'objecte1' utilitzant l'operador spread.
// Canvia una propietat de 'objecte2' i comprova que 'objecte1' no ha canviat.

let objecte1 = {
  nom: "jose",
  edat: 32,
};

let objecte2 = { ...objecte1 };
objecte2.nom = "juan";

console.log(objecte1, objecte2);

// Exercici 4
// Rest en Destructuring: Crea una array amb diversos elements.
// Utilitza destructuring i l'operador rest per a assignar els primers dos elements a variables,
// i després assignar la resta dels elements a una tercera variable.

const array1 = ["elemntOne", "elemntTwo", "elemntThree", "elemntFour", "elemntFive"];
let [firstElement, secondElement, ...restOfElements] = array1;
