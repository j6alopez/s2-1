// Exercici 1
// Map: Teniu un array de números [1, 2, 3, 4].
// Crea una nova array que contingui el quadrat de cada número.

let array = [1, 2, 3, 4];
let resultOne = array.map((element) => element ** 2);

// Exercici 2

// Filter: Teniu una array de números [1, 2, 3, 4]. 
// Crea una nova array que només contingui els números parells. 

let resultTwo = array.filter( element => element %2 === 0);

// Exercici 3

// Find: Teniu una array de números [1, 10 , 8, 11]. 
// Utilitza la funció find per a trobar el primer número que és major a 10.
arrayThree = [1, 10 , 8, 11];
number = arrayThree.find( element => element > 10);

// Exercici 4
// Rest en Destructuring: Crea una array amb diversos elements.
// Utilitza destructuring i l'operador rest per a assignar els primers dos elements a variables,
// i després assignar la resta dels elements a una tercera variable.

const array1 = [13, 7, 8, 21];
let additionedNumbers = array1.reduce( (accumulator, currentValue) => accumulator + currentValue);
