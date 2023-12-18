// Exercici 5
// Gestió d'errors amb async/await: Modifica la funció de l'exercici 4 per a que capturi qualsevol possible error utilitzant un bloc try/catch.

const { promiseFromExercici1 } = require('./nivell-1');

async function manageError() {
  try {
    const result = await promiseFromExercici1;
    console.log(result);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}
