// Exercici 6

// for-of amb index: Utilitza un bucle for-of per a imprimir a la consola cada element de l'array 
// i la seva posició (index): let noms = ['Anna', 'Bernat', 'Clara']

let noms = ['Anna', 'Bernat', 'Clara'];
const nomsEntries = noms.entries();

for (const entry of nomsEntries) {
    console.log(`nom: ${entry[1]},index: ${entry[0]}`);
}