// Dates

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
// console.log(myDate.getFullYear());
// console.log(myDate.getMonth());

let myDate2 = new Date(2020, 2, 25);
console.log(myDate2.toDateString());



let myTimestamp = Date.now();
console.log(myTimestamp);
console.log(myTimestamp.toDateString());

newDate.toLocaleString('default', { 
    month: 'long',
    weekday: 'long',
 });