//condición ? expr1 : expr2 

const age = 15;

const drink = age >= 18 ? 'wine' : 'water';// si la condicion es true retorna la condicion 1 de lo contrario devuelve la condicion 2
console.log(drink);


var firstCheck = false,
    secondCheck = false,
    access = firstCheck ? "Acceso Denegado" : secondCheck ? "Acceso Denegado" : "Acceso Permitido";

console.log( access ); // muestra "Acceso Permitido"