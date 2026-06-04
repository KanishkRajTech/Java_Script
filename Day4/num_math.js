const score = 400;

const score2 = new Number(400);
console.log(score);
console.log(score2);

console.log(score2.toString().length); // 3
console.log(score2.toFixed(1));


const otherScore = 100.56789;
console.log(otherScore.toPrecision(5)); // 100.57

const hundred = 10000000000;
console.log(hundred.toLocaleString()); // 10,00,00,00,000

const minNum = Number.MIN_VALUE;
const maxNum = Number.MAX_VALUE;
console.log(minNum);
console.log(maxNum);


// -------- math ---------

console.log(Math.PI);  // 3.141592653589793
console.log(Math.E);  // 2.718281828459045
console.log(Math.abs(-4)); // 4
console.log(Math.round(4.6)); // 5
console.log(Math.floor(4.6)); // 4
console.log(Math.ceil(4.2)); // 5
console.log(Math.sqrt(16)); // 4
console.log(Math.pow(2, 3)); // 8
console.log(Math.random()); // random number between 0 and 1
console.log(Math.random() * 10);

const min = 1;
const max = 6;
console.log(Math.floor(Math.random() * (max - min) + min)); // random number between 1 and 6