const firstName = 'Matias';
const ocupation = 'Student';
const birthYear = 1997;
const year = 2027;

const matias = "I'm" + firstName + ', a' + (year - birthYear) + ' years old' + ocupation;
console.log(matias);

const matiasNew = `I'm ${firstName}, a ${year - birthYear} years old ${ocupation}`;
console.log(matiasNew);