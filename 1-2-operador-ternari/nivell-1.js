//exercici 1
/* Operador ternari bàsic: Escriu una funció potConduir que accepti l'edat com a paràmetre i utilitzi l'operador ternari 
per determinar si l'usuari pot conduir. 
Si l'edat és 18 o més, ha de retornar 'Pots conduir'. Si no, ha de retornar 'No pots conduir'. */

function potConduir(age) {
  ageLimit = 18;
  allowedMessage = "Pots Conduir";
  notAllowedMessage = "No pots Conduir";

  return age >= ageLimit 
    ? allowedMessage 
    : notAllowedMessage;
}

//exercici 2
// Ús amb operadors de comparació: Escriu una expressió que utilitzi l'operador ternari per determinar quin dels dos nombres donats (num1 i num2) és més gran.
// Si num1 és més gran, retorna 'num1 és més gran'. Si no, retorna 'num2 és més gran'.

function compareNumbers(num1, num2) {
  if (num1 === num2) {
    return 'num1 i num2 son iguals';
  }

  return num1 > num2 
    ? 'num1 és més gran' 
    : 'num2 és mes gran'
}

