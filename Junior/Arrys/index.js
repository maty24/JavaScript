const friend1 = 'Matias';
const friend2 = 'Diego';
const friend3 = 'Lucas';

const friends = ['Matias','Diego','Lucas'];
console.log(friends);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length)//nos dice cuando elemenstos hay en el array

friends[2] = 'Jay';//se puede mutar asi aunque la variable sea una const
console.log(friends);
//friends = ['benjamin','sebastian']; no se puede mutar asi

const firstName = 'Matias';
const matias = [firstName, 'Godoy', 2021 - 1997, 'student', friends];//Puedo poner muchas cosas en el array

console.log(matias);
console.log(matias.length);


//////////////////////////
////////Exercise/////////
/////////////////////////

const calcAge = function(birthYear){
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010,2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);//para el ultimo array

console.log(age1,age2,age3);

//add elements
const newLength = friends.push('Daniella');//agrega algo el final del array
console.log(friends);
console.log(newLength);

friends.unshift('Javiera');
console.log(friends);


//remove elements
friends.pop();//ultimo
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();//primero
console.log(friends);

friends.push('23')
console.log(friends.indexOf('Matias'));//para buscar la posicion del array del elemento
console.log(friends.includes('Matias'));//busca si hay un nombre existente en el array
console.log(friends.includes('Rachel'));//no hay nombre igual al array 
console.log(friends.includes(23));// hay un 23 pero lo tirara falso porque el array ocupa igualdad estricta osea una triple iguak dad (===)


if(friends.includes('Fran')){
    console.log('You have a friend called Matias')
}else{
    console.log(`you haven't friend called Fran`)
}
