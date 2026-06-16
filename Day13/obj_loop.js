const myObject = {
    js: 'JavaScript',
    py: 'Python',
    rb: 'Ruby'
};

// for (const key in myObject) {
//     console.log(`key: ${key}, value: ${myObject[key]}`);
// }



// high order loop
const coding   = ['JavaScript', 'Python', 'Ruby', 'Java', 'Go', 'C++']
// coding.forEach( function (item) {
//     console.log(item);
// })


// coding.forEach( (item) => {
//     console.log(item);
// })

function printMe(item){
    console.log(item);
}
coding.forEach(printMe)


// coding.forEach( (item, index, arr)=>{
//     console.log(item, index, arr);
// })
