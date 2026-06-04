const name = "kanishkraj";
const repoCount = 100;

console.log(`${name.toUpperCase()} has ${repoCount} GitHub repositories.`);

const fullName = "kanishkraj";

console.log(fullName[0]); // k
console.log(fullName.__proto__); //{}
console.log(fullName.charAt(1)); // a
console.log(fullName.indexOf("h")); // 5

console.log(fullName.length); // 10

const newName = fullName.substring(0, 5);
console.log(newName); // kanis

const anotherName = fullName.slice(5);
console.log(anotherName); // hkraj

const newString = "  Kanishk Raj ";
console.log(newString.trim());


const url = "https://www.youtube.com/channel/kanish%20raj"
console.log(url.replace('%20', '-')); // https://www.youtube.com/channel/kanish-raj
;
console.log(url.includes('raj')); // true

console.log(url.split('/'));
