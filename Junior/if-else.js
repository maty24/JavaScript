const age = 15;
//const isOldEnoigh = age >= 18;//si la edad es mayor o igual a 18

if(age >= 18){
    console.log('Sarah can start driving licence');
}else{
    const yearsLeft = 18 - age;
    console.log(`Sarah is too yung. wait another ${yearsLeft} years :)`)
}

const birthYear = 1997;

let century;//lo dejo vacio para reasignarlo mas adelante
if(birthYear <= 2000){
    century = 20;//aqui se asigno el century
}else{
    century = 21;
}
console.log(century)


const agee = '18';
if(agee === 18) console.log('ola') //la triple igualdad se refiere a que tine que ser igual, es estricta
if(agee == 18) console.log('jelou')//la segunda igualdad se refiere a que son iguales aunque no sean iguales, ambios valores se combierten en dato comun 


//condicion ? resultado cierto : resultado falso

let edad = 12;
let puedeVotar = (edad > 18) ?"Puede votar" : "No puede votar";