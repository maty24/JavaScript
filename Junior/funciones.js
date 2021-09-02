function logger(){//() en los parentesis iran los parametros
    console.log('My name is Matias');
}

//llamada de la funcion
logger();

///////////////////////
//FUNCION DECLARATIVA//
///////////////////////
function fruitProcessor(apples, oranges){//les di valores a los pametros
    console.log(apples,oranges);
    const jucie = `Juice whith ${apples} apples and ${oranges} oranges `;
    return jucie;  //el return finaliza la ejecución de la función y especifica un valor para ser devuelto a quien llama a la función.
}
const appleJuice =  fruitProcessor(2,3);//le puse argumentos a los parametros, si queremos usar el valor que se devolvio hay que almacenarlo en una varible
console.log(appleJuice)


///////////////////////
//FUNCION DECLARATIVA//
///////////////////////
function calcAge1(birthYear){ //Puedo llamar la funcion antes que se arme
    return 2037 - birthYear;
}
const age1 = calcAge1(2018);
console.log(age1)

///////////////////////
//FUNCION EXPRECION//// 
///////////////////////
const calcAge2 = function(birthYear){//no puedo llamar la funcion antes que de se arme
    return 2037 - birthYear;
}
const age2 =  calcAge2(1991);
console.log(age2,age1)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const calcAge3 = birthYear  => 2037 - birthYear;
const age3 = calcAge3(1997)
console.log(age3);
 

const yearsUntilRetirement = (birthYear, firstName) =>{
    const age = 2020 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1997, 'Matias'));


