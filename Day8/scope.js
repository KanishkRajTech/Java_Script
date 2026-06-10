 var c = 40;

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}

console.log(c); // 30
// console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: b is not defined


function one(){
    const username = "John";
    function two(){
        website = "example.com"; 
        console.log(username); 
    }
    // console.log(website);
    two();
}
one()