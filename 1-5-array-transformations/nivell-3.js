// Exercici 6

// Every / Some: Usa every i some per a determinar si tots o alguns dels elements 
// de l'array [11, 12, 13, 14] són majors que 10, respectivament

let array = [11, 12, 13, 14];

let allBigger = array.every(element => element >= 10);
let atLeastOneBigger = array.some(element => element >= 10);
