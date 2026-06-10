const user ={
    name: 'John',
    sayHi() {
        console.log(`Hello, I'm ${this.name}`);
    }
}
user.sayHi();
console.log(this)



const addTwo = (a, b) => {
    return a + b;
}
console.log(addTwo(3, 4));