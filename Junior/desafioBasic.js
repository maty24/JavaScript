const massMark = 78;
const heightMark = 1.69;
const massJhon = 92;
const heightJhon = 1.95;

const BMImark = massMark / heightMark ** 2;//el ** significa elevado
const BMIjhon = massJhon /(heightJhon * heightJhon);
const markHigherBMI = BMImark > BMIjhon;
console.log(BMIjhon,BMImark,markHigherBMI)