// Exercici 5

// Donat un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", crea una funció en una sola línia que faci el següent:

//     Filtra els nombres majors o iguals a 10.
//     Multiplica cada nombre filtrat per 2.
//     Calcula la suma dels nombres filtrats i multiplicats per 2.
//     La funció ha de retornar el resultat de la suma.

let array = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];

let result = array.filter((element) => element >= 10)
            .map((element) => element * 2)
            .reduce((accumulator, currentValue) => accumulator + currentValue);
