const myarray = new Array(1, 2, 3, 4, 5);
console.log(myarray[1]);

// myarray.push(6);
// myarray.push(7);
// myarray.pop()
// myarray.unshift(3)
console.log(myarray)
myarray.shift()
console.log(myarray);

console.log(myarray.includes(6))

const newarray = myarray.join()
console.log(typeof(newarray));


// slice and splice
console.log(myarray);
const myarray2 = myarray.slice(1, 4);
console.log(myarray2);

const myarray3 = myarray.splice(1, 2);
console.log(myarray3);
console.log(myarray);