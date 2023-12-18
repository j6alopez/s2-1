// Exercici 1

// Creació d'una Promesa: Crea una promesa que es resolgui després de 2 segons i que retorni la cadena de text 'Hola, món'.

function promiseFromExercici1(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hola, món");
    }, timeout);
  });
}

promiseOne = promiseFromExercici1(2000); 

// Exercici 2

// Utilització d'una Promesa: Utilitza la promesa creada en l'exercici anterior. Crea un .then que imprimeixi el resultat a la consola.
promiseOne.then((message) => {
  console.log(message);
});

// Exercici 3

// Promesa amb reject: Crea una promesa que es resolgui després de 2 segons si l'input és igual a 'Hola', i que la rebutgi si l'input és qualsevol altra cosa.
const checkInput = (inputString) => {
  return new Promise((resolve, reject) => {
    let timeout = 2000;
    setTimeout(() => {
      inputString === "Hola" ? resolve(true) : reject(false);
    }, timeout);
  });
};

// Exercici 4

// Ús de async/await: Escriu una funció asíncrona que utilitzi la funció await per a esperar el resultat de la promesa creada a l'exercici 1, i que després imprimeixi aquest resultat a la consola.

async function callExampleOne() {
  const result = await promiseFromExercici1(2000);
  console.log(result);
}
