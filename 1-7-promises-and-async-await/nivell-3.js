// Exercici 6

// Promise.all: Crea dues promeses que es resolguin després de 2 i 3 segons, respectivament.
// Utilitza Promise.all per a esperar que ambdues promeses es resolguin, i imprimeix els resultats a la consola.

const promiseOne = new Promise((resolve, reject) => {
  const timeout = 2000;
  setTimeout(() => {
    resolve("Resolved from promise one");
  }, timeout);
});

const promiseTwo = new Promise((resolve, reject) => {
  const timeout = 3000;
  setTimeout(() => {
    resolve("Resolved from promise two");
  }, timeout);
});

promises = [promiseOne, promiseTwo];
Promise.all(promises).then((resolvedPromises) => console.log(resolvedPromises));
