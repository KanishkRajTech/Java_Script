function calculateCartPrice(...cart) {
    return cart
}

console.log(calculateCartPrice(100, 200, 300));


const anyobject = {
    name: "kanishk",
    price: 999,
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.name} and price is ${anyobject.price}`);
}
handleObject(anyobject);


const myNewArray = [1, 2, 3, 4, 5];
function returnSecondElement(myNewArray) {
    return myNewArray[1];
}
console.log(returnSecondElement(myNewArray));